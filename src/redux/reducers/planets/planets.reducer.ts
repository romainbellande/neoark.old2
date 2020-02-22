import { createSlice, createSelector, Action } from '@reduxjs/toolkit';
import mergeWith from 'lodash/mergeWith';

import Planet from 'src/common/resources/planet/planet.interface';
import planetService from 'src/common/services/planet';
import { AppThunk } from 'src/redux/store';
import { RootState } from 'src/redux/root-reducer';
import getFacilityProduction from 'src/common/resources/formulas/get-facility-production';
import FacilityCode from 'src/common/resources/planet/facility/facility-code.enum';
import facilityService from 'src/common/services/facility';

// Slice
interface PayloadAction<T> extends Action {
  payload: T;
}
interface UpradeFacilityPayload {
  code: FacilityCode;
}

interface PlanetsErrors {
  FACILITY_UPGRADE: any;
  SCHEDULE_FACILITY_UPGRADE: any;
}

const planetsSlice = createSlice({
  name: 'planets',
  initialState: {
    planets: [] as Planet[],
    currentPlanetIndex: 0,
    currentFacilityIndex: 0,
    isLoading: false,
    error: null,
    errors: {} as PlanetsErrors,
  },
  reducers: {
    upgradeFacilitySuccess(state, action: PayloadAction<Planet>) {
      const currentPlanet = action.payload;
      state.planets = [...state.planets.filter(planet => planet.id !== currentPlanet.id), currentPlanet];
    },
    upgradeFacilityFailed(state, action) {
      state.errors.FACILITY_UPGRADE = action.payload.message;
    },
    fetchPlanetsSuccess(state, action) {
      const planets = action.payload;
      state.planets = Array.isArray(planets) ? planets : [];
      state.error = null;
      state.isLoading = false;
      state.currentPlanetIndex = 0;
    },
    fetchPlanetsFailed(state, action) {
      state.error = action.payload.message;
      state.isLoading = false;
    },
    fetchPlanetsLoading(state, action) {
      state.isLoading = action.payload;
    },
    scheduleFacilityUpradeSuccess(state, action) {
      const updatedPlanet = action.payload;
      state.planets = state.planets.map(planet => (planet.id === updatedPlanet.id ? updatedPlanet : planet));
      state.error = null;
    },
    scheduleFacilityUpradeFailed(state, action) {
      state.errors.SCHEDULE_FACILITY_UPGRADE = action.payload.message;
    },
  },
});

// Exported actions

export const {
  fetchPlanetsSuccess,
  fetchPlanetsFailed,
  fetchPlanetsLoading,
  scheduleFacilityUpradeSuccess,
  scheduleFacilityUpradeFailed,
  upgradeFacilityFailed,
  upgradeFacilitySuccess,
} = planetsSlice.actions;

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

export const scheduleFacilityUprade = (facilityCode: FacilityCode): AppThunk => async (dispatch, getState) => {
  try {
    const currentPlanet = selectCurrentPlanet(getState());
    if (!currentPlanet || !currentPlanet.id) {
      return dispatch(scheduleFacilityUpradeFailed(`there is no current planet selected`));
    }
    const updatedPlanet = await facilityService.scheduleFacilityUpgrade(currentPlanet.id, facilityCode);
    dispatch(scheduleFacilityUpradeSuccess(updatedPlanet));
  } catch (error) {
    dispatch(scheduleFacilityUpradeFailed(error));
  }
};

export const upgradeFacility = (facilityCode: FacilityCode): AppThunk => async (dispatch, getState) => {
  try {
    const currentPlanet = selectCurrentPlanet(getState());
    if (!currentPlanet || !currentPlanet.id) {
      return dispatch(upgradeFacilityFailed(`there is no current planet selected`));
    }
    const updatedPlanet = await facilityService.upgradeFacility(currentPlanet.id, facilityCode);
    dispatch(upgradeFacilitySuccess(updatedPlanet));
  } catch (error) {
    dispatch(upgradeFacilityFailed(error));
  }
};

// Selectors

export const selectCurrentPlanet = (state: RootState) => {
  const { planets, currentPlanetIndex } = state.planets;
  return planets.length > 0 ? planets[currentPlanetIndex] : null;
};

export const selectFacilities = createSelector(selectCurrentPlanet, currentPlanet =>
  currentPlanet ? currentPlanet.facilities : [],
);

export const selectCurrentFacilityIndex = (state: RootState) => state.planets.currentFacilityIndex;

export const selectCurrentFacility = createSelector(
  selectFacilities,
  selectCurrentFacilityIndex,
  (facilities, currentFacilityIndex) => (facilities.length > 0 ? facilities[currentFacilityIndex] : null),
);

export const selectProductionMatrix = createSelector(selectFacilities, facilities => {
  const matrix = facilities.map(({ code, level }) => getFacilityProduction(code, level));
  return matrix.reduce(
    (previous, current) =>
      mergeWith(previous, current, (objValue, srcValue) => (objValue === 'number' ? objValue + srcValue : srcValue)),
    {},
  );
});

export default planetsSlice.reducer;
