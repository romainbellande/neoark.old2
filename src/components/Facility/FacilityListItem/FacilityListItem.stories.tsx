import React from 'react';
import { action } from '@storybook/addon-actions';

import FacilityListItem from './FacilityListItemView';

export default { title: 'Facility|FacilityListItem', component: FacilityListItem };

export const Default = () => <FacilityListItem name="Metal mine" level={10} onClick={action('onClick')} />;
