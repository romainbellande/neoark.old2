import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import BusinessIcon from '@material-ui/icons/Business';
import { LoginCallback } from '@okta/okta-react';

import Dashboard from './components/Dashboard';
import DashboardCategory from './components/Dashboard/interfaces/dashboard-category.interface';

import LoginRoute from './routes/LoginRoute';
import PlanetOverviewRoute from './routes/PlanetOverviewRoute';
import FacilitiesRoute from './routes/FacilitiesRoute';
import AppRouteProps from './common/interfaces/app-route.interface';

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

const routes: AppRouteProps[] = [
  {
    path: '/login',
    component: LoginRoute,
  },
  {
    path: '/implicit/callback',
    component: LoginCallback,
  },
  {
    path: '/',
    component: () => <Dashboard routes={dashboardRoutes} />,
    secure: true,
  },
];

export default routes;
