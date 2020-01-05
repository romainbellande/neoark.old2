import React from 'react';

import ResourceBarItem from './ResourceBarItemView';
import ResourceCode from 'src/common/resources/resource/resource-code.enum';

export default { title: 'ResourceBar|ResourceBarItem', component: ResourceBarItem };

export const Default = () => <ResourceBarItem code={ResourceCode.METAL} value={100000} />;
