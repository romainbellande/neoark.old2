import React from 'react';

import PlanetOverview from './PlanetOverviewView';
import planetMock from 'src/common/resources/planet/planet.mock';

export default { title: 'PlanetOverview', component: PlanetOverview };

export const Default = () => <PlanetOverview planet={planetMock} />;
