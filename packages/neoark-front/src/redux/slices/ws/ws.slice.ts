import { createSlice, createSelector, Action } from '@reduxjs/toolkit';
import { RootState } from 'src/redux/root-reducer';

interface WsSendPayload {
  event: string;
  message: string;
}

const wsSlice = createSlice({
  name: 'ws',
  initialState: {
    connected: false,
  },
  reducers: {
    wsConnected(state) {
      state.connected = true;
    },
    wsDisconnected(state) {
      state.connected = false;
    },
  },
});

// Actions

export const { wsConnected, wsDisconnected } = wsSlice.actions;

// Selectors
export const selectWsState = (state: RootState) => state.ws;
export const selectConnected = createSelector(selectWsState, state => state.connected);

// Slice

export default wsSlice;
