import { createStore, CombinedState } from 'redux';

import planetMock from '../resources/mocks/planet.mock';
import { AppStore } from 'src/redux/store';
import { RootState } from 'src/redux/root-reducer';

const initialState: CombinedState<RootState> = {
  planets: {
    planets: [planetMock],
    currentPlanetIndex: 0,
    currentFacilityIndex: 0,
    isLoading: false,
    error: null,
    errors: {
      FACILITY_UPGRADE: null,
      SCHEDULE_FACILITY_UPGRADE: null,
    },
  },
  ws: {
    connected: true,
  },
  auth: {
    accessToken: {
      accessToken: 'myAccessToken',
      authorizeUrl: '',
      tokenType: 'Bearer',
      scopes: ['email'],
      expiresAt: 123,
      userinfoUrl: '',
    },
  },
};

export default createStore(() => initialState);
