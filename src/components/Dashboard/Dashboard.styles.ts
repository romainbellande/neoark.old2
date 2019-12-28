import { Theme, makeStyles } from '@material-ui/core';

export const drawerWidth = 256;

export default makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  mainContent: {
    flex: 1,
    padding: '48px 36px 0',
  },
  wrapper: {
    flex: 1,
    display: 'flex',
    flexFlow: 'row',
  },
  infoNav: {
    height: '100%',
  },
}));
