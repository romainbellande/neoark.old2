import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';

import useStyles from './DashboardHeader.styles';
import ResourceBar from 'src/components/ResourceBar';
import Resource from 'src/common/resources/resource/resource.interface';

interface Props {
  /**
   * Triggered on mobile only when a user click on the burger menu.
   */
  onDrawerToggle(): void;

  resources: Resource[];
}

const DashboardHeaderView = ({ onDrawerToggle, resources }: Props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar className={classes.appBar} position="sticky" elevation={0}>
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Hidden smUp>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={onDrawerToggle}
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
              </Hidden>
            </Grid>
            <ResourceBar />
            <Grid item className={classes.endSpacer} />
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default DashboardHeaderView;
