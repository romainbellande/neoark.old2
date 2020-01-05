import React from 'react';
import { RouteProps } from 'react-router';
import HomeIcon from '@material-ui/icons/Home';
import BusinessIcon from '@material-ui/icons/Business';

import Dashboard from './components/Dashboard';
import DashboardCategory from './components/Dashboard/interfaces/dashboard-category.interface';

import LoginRoute from './routes/LoginRoute';
import PlanetOverviewRoute from './routes/PlanetOverviewRoute';
import FacilitiesRoute from './routes/FacilitiesRoute';

const dashboardRoutes: DashboardCategory[] = [
  {
    id: 'Planet',
    children: [
      {
        id: 'Overview',
        component: PlanetOverviewRoute,
        path: '/',
        icon: <HomeIcon />,
        exact: true,
      },
      {
        id: 'Facilities',
        component: FacilitiesRoute,
        path: '/facilities',
        icon: <BusinessIcon />,
      },
    ],
  },
];

const routes: RouteProps[] = [
  {
    path: '/login',
    component: LoginRoute,
  },
  {
    path: '/',
    component: () => <Dashboard routes={dashboardRoutes} />,
  },
];

export default routes;
