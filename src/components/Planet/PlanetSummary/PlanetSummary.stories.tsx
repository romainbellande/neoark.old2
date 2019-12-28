import React from 'react';

import PlanetSummary from './PlanetSummaryContainer';
import planetMock from 'src/common/resources/planet/planet.mock';

export default { title: 'PlanetSummary', component: PlanetSummary };

export const Default = () => <PlanetSummary planet={planetMock} />;
