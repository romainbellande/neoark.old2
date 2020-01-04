import React from 'react';

import PlanetOverview from 'src/components/Planet/PlanetOverview';
import planetMock from 'src/common/resources/mocks/planet.mock';

const PlanetOverviewRouteView = () => {
  return <PlanetOverview planet={planetMock} />;
};

export default PlanetOverviewRouteView;
