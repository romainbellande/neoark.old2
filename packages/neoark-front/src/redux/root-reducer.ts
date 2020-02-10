import { combineReducers } from '@reduxjs/toolkit';

import planetsReducer from './reducers/planets/planets.reducer';
import facilitiesReducer from './reducers/planets/facilities.reducer';

const rootReducer = combineReducers({
  planets: planetsReducer,
  facilities: facilitiesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
