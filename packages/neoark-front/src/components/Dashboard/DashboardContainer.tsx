import React, { useState } from 'react';

import DashboardView from './DashboardView';
import DashboardCategory from './interfaces/dashboard-category.interface';
import PlanetResource from 'src/common/resources/planet/planet-resource.interface';

interface Props {
  routes: DashboardCategory[];
  resources: PlanetResource[];
}

const DashboardContainer: React.FC<Props> = ({ routes, resources }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(prevValue => !prevValue);

  const viewProps = { mobileOpen, handleDrawerToggle, routes, resources };

  return <DashboardView {...viewProps} />;
};

export default DashboardContainer;
