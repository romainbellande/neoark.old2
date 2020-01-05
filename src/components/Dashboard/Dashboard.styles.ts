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
    color: 'rgba(255, 255, 255, 0.7)',
    position: 'relative',
  },
  mainBackgroundImage: {
    backgroundColor: '#5d748c',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    filter: 'blur(1px)',
    zIndex: -1,
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
