import { createSlice } from '@reduxjs/toolkit';
import Planet from 'src/common/resources/planet/planet.interface';
import planetService from 'src/common/services/planet';
import { AppThunk } from 'src/redux/store';
import { RootState } from 'src/redux/root-reducer';

// Slice

const planetsSlice = createSlice({
  name: 'planets',
  initialState: {
    planets: [] as Planet[],
    currentPlanetIndex: 0,
    isLoading: false,
    error: null,
  },
  reducers: {
    fetchPlanetsSuccess(state, action) {
      const planets = action.payload;
      state.planets = Array.isArray(planets) ? planets : [];
      state.error = null;
      state.isLoading = false;
      state.currentPlanetIndex = 0;
    },
    fetchPlanetsFailed(state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
    fetchPlanetsLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

// Exported actions

export const { fetchPlanetsSuccess, fetchPlanetsFailed, fetchPlanetsLoading } = planetsSlice.actions;

// Thunks

export const fetchPlanets = (): AppThunk => async dispatch => {
  try {
    await dispatch(fetchPlanetsLoading(true));
    const planets = await planetService.getPlanets();
    dispatch(fetchPlanetsSuccess(planets));
  } catch (error) {
    dispatch(fetchPlanetsFailed(error));
  }
};

// Selectors

export const selectCurrentPlanet = (state: RootState) => {
  const { planets, currentPlanetIndex } = state.planets;
  return planets.length > 0 ? planets[currentPlanetIndex] : null;
};

export default planetsSlice.reducer;
