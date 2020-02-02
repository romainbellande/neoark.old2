import { combineReducers } from '@reduxjs/toolkit';

import planetsReducer from './reducers/planets/planets.reducer';

const rootReducer = combineReducers({
  planets: planetsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
