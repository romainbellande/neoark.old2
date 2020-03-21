import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useOktaAuth } from '@okta/okta-react';

import PlanetOverview from 'src/components/Planet/PlanetOverview';
import { selectCurrentPlanet } from 'src/redux/slices/planets/planets.slice';

const PlanetOverviewRouteView = () => {
  const { authState, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    console.log('authService', authService);
    if (!authState.isAuthenticated) {
      // When user isn't authenticated, forget any user info
      setUserInfo(null);
    } else {
      console.log('test');
      authService.getUser().then((info: any) => {
        console.log('info', info);
        setUserInfo(info);
      });
      authService.getAccessToken().then((accessToken: string) => {
        console.log('accessToken', accessToken);
      });
    }
  }, [authState, authService]);

  const currentPlanet = useSelector(selectCurrentPlanet);
  return currentPlanet ? <PlanetOverview planet={currentPlanet} /> : null;
};

export default PlanetOverviewRouteView;
