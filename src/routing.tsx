import React from 'react';
import { RouteProps } from 'react-router';

import Dashboard from './components/Dashboard';
import DashboardCategory from './components/Dashboard/interfaces/dashboard-category.interface';
import LoginRoute from './routes/LoginRoute';

const dashboardRoutes: DashboardCategory[] = [];

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
