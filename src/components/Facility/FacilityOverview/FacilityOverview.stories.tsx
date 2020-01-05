import React from 'react';
import { action } from '@storybook/addon-actions';

import FacilityOverview from './FacilityOverviewContainer';
import facilitiesMock from 'src/common/resources/mocks/facilities.mock';

export default { title: 'Facility|FacilityOverview', component: FacilityOverview };

export const Default = () => (
  <FacilityOverview {...facilitiesMock[0]} onUpgrade={action('onUpgrade')} upgradeStartedAt={undefined} />
);

export const Upgrading = () => <FacilityOverview {...facilitiesMock[0]} onUpgrade={action('onUpgrade')} />;
