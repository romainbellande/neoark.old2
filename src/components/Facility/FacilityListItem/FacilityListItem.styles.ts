import { Theme, makeStyles } from '@material-ui/core';

export default makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
    padding: '15px',
    width: '200px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },
}));
