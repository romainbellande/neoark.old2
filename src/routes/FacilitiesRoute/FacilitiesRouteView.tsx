import React, { useState, useEffect } from 'react';

import FacilityOverview from 'src/components/Facility/FacilityOverview';
import Grid from '@material-ui/core/Grid';

import Facility from 'src/common/resources/facility/facility.interface';
import facilityService from 'src/common/services/facility';

const FacilitiesRouteView = () => {
  const [facilities, setFacilities] = useState<Facility[]>([]);

  useEffect(() => {
    let isSubscribed = true;
    facilityService.getFacilities('0').then(facilities => {
      if (isSubscribed) {
        setFacilities(facilities);
      }
    });

    return () => {
      isSubscribed = false;
    };
  }, []);

  return (
    <div>
      <Grid container spacing={2}>
        {facilities.map(facilityMock => (
          <Grid item key={`facility-${facilityMock.name}`}>
            <FacilityOverview {...facilityMock} onUpgrade={() => {}} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default FacilitiesRouteView;
