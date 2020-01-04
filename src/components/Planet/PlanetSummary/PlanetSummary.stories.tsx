import React from 'react';

import PlanetSummary from './PlanetSummaryContainer';
import planetMock from 'src/common/resources/mocks/planet.mock';

export default { title: 'Planet|PlanetSummary', component: PlanetSummary };

export const Default = () => <PlanetSummary planet={planetMock} />;
