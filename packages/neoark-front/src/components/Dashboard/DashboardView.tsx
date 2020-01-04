import React from 'react';
import { Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';

import Navigator from './Navigator';
import DashboardHeader from './DashboardHeader';
import useStyles, { drawerWidth } from './Dashboard.styles';
import DashboardCategory from './interfaces/dashboard-category.interface';
import PlanetResource from 'src/common/resources/planet/planet-resource.interface';

export interface Props {
  mobileOpen: boolean;
  handleDrawerToggle(): void;
  routes: DashboardCategory[];
  resources: PlanetResource[];
}

const DashboardView = ({ mobileOpen, handleDrawerToggle, routes, resources }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <nav className={classes.drawer}>
        <Hidden smUp implementation="js">
          <Navigator
            PaperProps={{ style: { width: drawerWidth } }}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            routes={routes}
          />
        </Hidden>
        <Hidden xsDown implementation="css">
          <Navigator routes={routes} PaperProps={{ style: { width: drawerWidth } }} />
        </Hidden>
      </nav>
      <div className={classes.appContent}>
        <DashboardHeader onDrawerToggle={handleDrawerToggle} resources={resources} />
        <div className={classes.wrapper}>
          <main className={classes.mainContent}>
            <span className={classes.mainBackgroundImage} />
            {routes.map(({ children }) => children.map(({ id, ...route }) => <Route key={`route-${id}`} {...route} />))}
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;
