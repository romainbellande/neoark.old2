import React, { useState } from 'react';

import DashboardView from './DashboardView';
import DashboardCategory from './interfaces/dashboard-category.interface';

interface Props {
  routes: DashboardCategory[];
}

const DashboardContainer: React.FC<Props> = ({ routes }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(prevValue => !prevValue);

  const viewProps = { mobileOpen, handleDrawerToggle, routes };

  return <DashboardView {...viewProps} />;
};

export default DashboardContainer;
