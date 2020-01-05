import { makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) => ({
  root: {
    maxWidth: '300px',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
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
}));
