import { combineReducers } from '@reduxjs/toolkit';

import planetsSlice from './slices/planets/planets.slice';
import wsSlice from './slices/ws/ws.slice';
import authSlice from './slices/auth/auth.slice';

const rootReducer = combineReducers({
  planets: planetsSlice.reducer,
  ws: wsSlice.reducer,
  auth: authSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
