import React from 'react';
import { action } from '@storybook/addon-actions';

import FacilityOverview from './FacilityOverviewContainer';
import planetMock from '../../../common/resources/mocks/planet.mock';

export default { title: 'Facility|FacilityOverview', component: FacilityOverview };

export const Default = () => <FacilityOverview {...planetMock.facilities[1]} onUpgrade={action('onUpgrade')} />;

export const Upgrading = () => <FacilityOverview {...planetMock.facilities[0]} onUpgrade={action('onUpgrade')} />;
