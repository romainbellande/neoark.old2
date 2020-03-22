import { createAction, Middleware } from '@reduxjs/toolkit';

import { AppDispatch } from '../store';
import { RootState } from '../root-reducer';
import { wsConnected, wsDisconnected } from '../slices/ws/ws.slice';
import { selectAccessToken } from '../slices/auth/auth.slice';

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

interface SendMessagePayload {
  event: WsEvent;
  message: any;
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

  const onClose = (store: any) => ({ code, reason }: any) => {
    store.dispatch(wsDisconnected({ code, reason }));
  };

  const onMessage = (store: any) => (messageEvent: any) => {
    const { event, data } = JSON.parse(messageEvent.data);
    console.info('event receive', { event, data });
    const action = messageMatrix[event as WsEvent];
    if (typeof action === 'function') {
      store.dispatch(action(data));
    }
  };

  const createSender = (store: any) => ({ event, message }: SendMessagePayload) => {
    const accessToken = selectAccessToken(store.getState());

    socket?.send(
      JSON.stringify({
        event,
        data: {
          message,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      }),
    );
  };

  // the middleware part of this function
  return store => next => action => {
    const sender = createSender(store);

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
        const message = action.payload;
        console.log('sending a message', message);
        sender({ event: WsEvent.User, message });
        break;

      default:
        console.log('the next action:', action);
        return next(action);
    }
  };
};

export default wsMiddleware();
