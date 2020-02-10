import React from 'react';
import { useSelector } from 'react-redux';

import PlanetOverview from 'src/components/Planet/PlanetOverview';
import { selectCurrentPlanet } from 'src/redux/reducers/planets/planets.reducer';

const PlanetOverviewRouteView = () => {
  const currentPlanet = useSelector(selectCurrentPlanet);
  return currentPlanet ? <PlanetOverview planet={currentPlanet} /> : null;
};

export default PlanetOverviewRouteView;
