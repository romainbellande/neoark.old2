import React from 'react';

import PlanetOverview from './PlanetOverviewView';
import planetMock from 'src/common/resources/mocks/planet.mock.ts';

export default { title: 'Planet|PlanetOverview', component: PlanetOverview };

export const Default = () => <PlanetOverview planet={planetMock} />;
