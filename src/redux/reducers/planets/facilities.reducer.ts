import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import mergeWith from 'lodash/mergeWith';

import facilityService from 'src/common/services/facility';
import { AppThunk } from 'src/redux/store';
import { RootState } from 'src/redux/root-reducer';
import Facility from 'src/common/resources/facility/facility.interface';
import getFacilityProduction from 'src/common/resources/formulas/get-facility-production';

// Slice

const facilitiesSlice = createSlice({
  name: 'facilities',
  initialState: {
    facilities: [] as Facility[],
    currentFacilityIndex: 0,
    isLoading: false,
    error: null,
  },
  reducers: {
    fetchFacilitiesSuccess(state, action) {
      const facilities = action.payload;
      state.facilities = Array.isArray(facilities) ? facilities : [];
      state.error = null;
      state.isLoading = false;
      state.currentFacilityIndex = 0;
    },
    fetchFacilitiesFailed(state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
    fetchFacilitiesLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

// Exported actions

export const { fetchFacilitiesSuccess, fetchFacilitiesFailed, fetchFacilitiesLoading } = facilitiesSlice.actions;

// Thunks

export const fetchFacilities = (planetId: string): AppThunk => async dispatch => {
  try {
    await dispatch(fetchFacilitiesLoading(true));
    const facilities = await facilityService.getFacilities(planetId);
    dispatch(fetchFacilitiesSuccess(facilities));
  } catch (error) {
    dispatch(fetchFacilitiesFailed(error));
  }
};

// Selectors

export const selectCurrentFacility = (state: RootState) => {
  const { facilities, currentFacilityIndex } = state.facilities;
  return facilities.length > 0 ? facilities[currentFacilityIndex] : null;
};

export const selectFacilities = (state: RootState) => state.facilities.facilities;

export const selectProductionMatrix = createSelector(selectFacilities, facilities => {
  const matrix = facilities.map(({ code, level }) => getFacilityProduction(code, level));
  return matrix.reduce(
    (previous, current) =>
      mergeWith(previous, current, (objValue, srcValue) => (objValue === 'number' ? objValue + srcValue : srcValue)),
    {},
  );
});

export default facilitiesSlice.reducer;
