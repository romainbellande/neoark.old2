import { createAction, Middleware } from '@reduxjs/toolkit';

import { AppDispatch } from '../store';
import { RootState } from '../root-reducer';
import { wsConnected, wsDisconnected } from '../slices/ws/ws.slice';

interface WsConnectPayload {
  host: string;
  token: string;
}

export const wsConnect = createAction<WsConnectPayload>('ws/connected');
export const wsDisconnect = createAction('ws/disconnect');
export const sendUserInfo = createAction<any>('ws/userinfo');
export const receiveUserInfo = createAction<any>('ws/receiveUserInfo');

enum WsEvent {
  User = 'user',
}

const messageMatrix = {
  [WsEvent.User]: receiveUserInfo,
};

const wsMiddleware: Function = (): Middleware<AppDispatch, RootState> => {
  let socket: WebSocket | null = null;

  const onOpen = (store: any) => (event: any) => {
    const host = event.target.url;
    store.dispatch(wsConnected());
  };

  const onClose = (store: any) => () => {
    console.error('on socket closed');
    store.dispatch(wsDisconnected());
  };

  const onMessage = (store: any) => (messageEvent: any) => {
    const { event, data } = JSON.parse(messageEvent.data);
    console.info('event receive', { event, data });
    const action = messageMatrix[event as WsEvent];
    if (typeof action === 'function') {
      store.dispatch(action(data));
    }
  };

  // the middleware part of this function
  return store => next => action => {
    switch (action.type) {
      case wsConnect.toString():
        if (socket === null) {
          // connect to the remote host
          const { host, token } = action.payload;
          const wsPrefix = window.location.protocol === 'https:' ? 'wss' : 'ws';
          const wsURL = `${wsPrefix}://${host}?token=${token}`;
          socket = new WebSocket(wsURL);

          // websocket handlers
          socket.onmessage = onMessage(store);
          socket.onclose = onClose(store);
          socket.onopen = onOpen(store);
        }

        break;

      case wsDisconnect.toString():
        if (socket !== null) {
          socket.close();
        }
        socket = null;
        console.log('websocket closed');
        break;

      case sendUserInfo.toString():
        const data = action.payload;
        console.log('sending a message', data);
        socket?.send(JSON.stringify({ event: WsEvent.User, data }));
        break;

      default:
        console.log('the next action:', action);
        return next(action);
    }
  };
};

export default wsMiddleware();
