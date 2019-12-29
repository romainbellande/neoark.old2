import { makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) => ({
  paper: {
    width: '200px',
    backgroundColor: '#18202c',
    color: 'rgba(255, 255, 255, 0.7)',
    padding: '15px 5px 0px 5px',
  },
  queueTitle: {
    fontWeight: 600,
  },
  itemText: {
    // minHeight: '110px',
  },
  itemContent: {
    margin: '10px 0',
    fontSize: '12px',
  },
  itemTitle: {
    fontSize: '14px',
  },
  itemRow: {
    width: '100%',
    fontSize: '10px',
  },
  divider: {
    backgroundColor: 'rgba(245,245,245, 0.3)',
  },
  itemProgress: {
    marginTop: '15px',
  },
  emptyQueue: {
    textAlign: 'center',
  },
}));
