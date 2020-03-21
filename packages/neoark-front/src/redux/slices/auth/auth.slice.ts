import { createSlice, createSelector } from '@reduxjs/toolkit';
import { RootState } from 'src/redux/root-reducer';
import AccessToken from 'src/common/interfaces/access-token.interface';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    accessToken: null as AccessToken | null,
  },
  reducers: {
    setAccessToken(state, { payload }) {
      state.accessToken = payload;
    },
  },
});

// Actions

export const { setAccessToken } = authSlice.actions;

// Selectors
export const selectAuthState = (state: RootState) => state.auth;

// Slice

export default authSlice;
