import React from 'react';

import FacilityOverview from 'src/components/Facility/FacilityOverview';
import Grid from '@material-ui/core/Grid';

import facilitiesMock from 'src/common/resources/mocks/facilities.mock';

const FacilitiesRouteView = () => {
  return (
    <div>
      <Grid container spacing={2}>
        {facilitiesMock.map(facilityMock => (
          <Grid item key={`facility-${facilityMock.name}`}>
            <FacilityOverview {...facilityMock} onUpgrade={() => {}} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default FacilitiesRouteView;
