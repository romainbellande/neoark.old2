import { makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) => ({
  root: {
    maxWidth: '300px',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  rootInProgress: {
    background: 'repeating-linear-gradient(-45deg,rgba(255,150,0,.4),rgba(255,150,0,.4) 1px,#232f3e 2px,#232f3e 40px)',
  },
  remainingTime: {
    position: 'absolute',
    top: '5px',
    right: '5px',
    fontSize: '12px',
  },
  divider: {
    margin: '15px 0',
    backgroundColor: theme.palette.common.white,
  },
  costTitle: {
    marginBottom: '15px',
  },
  actions: {
    marginTop: '15px',
  },
  expand: {
    color: theme.palette.common.white,
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  progress: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    pointerEvents: 'none',
    backgroundColor: 'rgba(40, 245, 45, 0.5)',
  },
  cardHeader: {
    position: 'relative',
  },
}));
