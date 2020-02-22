import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import FacilityOverview from 'src/components/Facility/FacilityOverview';
import { selectFacilities, scheduleFacilityUprade } from 'src/redux/reducers/planets/planets.reducer';
import FacilityCode from 'src/common/resources/planet/facility/facility-code.enum';

const FacilitiesRouteView = () => {
  const facilities = useSelector(selectFacilities);
  const dispatch = useDispatch();
  const onUpgrade = (facilityCode: FacilityCode) => () => {
    dispatch(scheduleFacilityUprade(facilityCode));
  };

  return (
    <div>
      <Grid container spacing={2}>
        {facilities.map(facility => (
          <Grid item key={`facility-${facility.code}`}>
            <FacilityOverview {...facility} onUpgrade={onUpgrade(facility.code)} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default FacilitiesRouteView;
