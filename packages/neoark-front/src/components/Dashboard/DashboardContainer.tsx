import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import DashboardView from './DashboardView';
import DashboardCategory from './interfaces/dashboard-category.interface';
import { fetchPlanets, selectCurrentPlanet } from 'src/redux/slices/planets/planets.slice';
import useThunk from 'src/common/helpers/use-thunk';

interface Props {
  routes: DashboardCategory[];
}

const DashboardContainer: React.FC<Props> = ({ routes }) => {
  const currentPlanet = useSelector(selectCurrentPlanet);
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(prevValue => !prevValue);
  useThunk(fetchPlanets);

  return currentPlanet ? (
    <DashboardView mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} routes={routes} />
  ) : null;
};

export default DashboardContainer;
