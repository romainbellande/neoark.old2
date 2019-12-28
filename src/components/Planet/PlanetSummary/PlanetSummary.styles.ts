import { makeStyles, Theme } from '@material-ui/core';

export default makeStyles((them: Theme) => ({
  paper: {
    backgroundColor: '#232f3e',
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '14px',
  },
  title: {
    textAlign: 'center',
    paddingTop: '15px',
  },
  list: {
    maxWidth: '300px',
    backgroundColor: 'transparent',
    color: 'rgba(255, 255, 255, 0.7)',
  },
  label: {
    fontSize: '12px',
  },
  value: {
    fontSize: '12px',
    paddingLeft: '10px',
  },
  listItem: {
    padding: '2px 16px',
  },
}));
