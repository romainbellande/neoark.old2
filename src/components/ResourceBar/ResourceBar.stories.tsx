import React from 'react';

import ResourceBar from './ResourceBarContainer';
import planetMock from 'src/common/resources/mocks/planet.mock';

export default { title: 'ResourceBar|ResourceBar', component: ResourceBar };

export const Default = () => <ResourceBar items={planetMock.resources} />;
