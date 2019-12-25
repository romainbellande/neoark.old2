import React from 'react';
import { action } from '@storybook/addon-actions';

import DashboardHeader from './DashboardHeaderView';

export default { title: 'DashboardHeader', component: DashboardHeader };

export const Default = () => <DashboardHeader onDrawerToggle={action('onDrawerToggle')} />;
