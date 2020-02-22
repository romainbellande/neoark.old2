import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import DashboardView from './DashboardView';
import DashboardCategory from './interfaces/dashboard-category.interface';
import Resource from 'src/common/resources/resource/resource.interface';
import { fetchPlanets, selectCurrentPlanet } from 'src/redux/reducers/planets/planets.reducer';
import useThunk from 'src/common/helpers/use-thunk';

interface Props {
  routes: DashboardCategory[];
  resources: Resource[];
}

const DashboardContainer: React.FC<Props> = ({ routes, resources }) => {
  const currentPlanet = useSelector(selectCurrentPlanet);
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(prevValue => !prevValue);
  useThunk(fetchPlanets);

  const viewProps = { mobileOpen, handleDrawerToggle, routes, resources };

  return currentPlanet ? <DashboardView {...viewProps} /> : null;
};

export default DashboardContainer;
