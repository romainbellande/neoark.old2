import React from 'react';
import { action } from '@storybook/addon-actions';

import planetMock from 'src/common/resources/mocks/planet.mock';
import DashboardHeader from './DashboardHeaderView';

export default { title: 'Dashboard|DashboardHeader', component: DashboardHeader };

export const Default = () => (
  <DashboardHeader onDrawerToggle={action('onDrawerToggle')} resources={planetMock.resources} />
);
