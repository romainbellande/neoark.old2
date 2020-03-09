import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import DashboardView from './DashboardView';
import DashboardCategory from './interfaces/dashboard-category.interface';
import { fetchPlanets, selectCurrentPlanet } from 'src/redux/reducers/planets/planets.reducer';
import useThunk from 'src/common/helpers/use-thunk';
import config from 'src/common/config';

interface Props {
  routes: DashboardCategory[];
}

const DashboardContainer: React.FC<Props> = ({ routes }) => {
  const currentPlanet = useSelector(selectCurrentPlanet);
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(prevValue => !prevValue);
  useThunk(fetchPlanets);
  const wsPrefix = window.location.protocol === 'https:' ? 'wss' : 'ws';
  const ws = new WebSocket(`${wsPrefix}://${config.api.host}/ws`);

  ws.onopen = () => {
    ws.send(
      JSON.stringify({
        event: 'user',
        data: {
          property: 'my data',
        },
      }),
    );

    ws.onmessage = event => {
      console.log('event', event);
    };
  };

  return currentPlanet ? (
    <DashboardView mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} routes={routes} />
  ) : null;
};

export default DashboardContainer;
