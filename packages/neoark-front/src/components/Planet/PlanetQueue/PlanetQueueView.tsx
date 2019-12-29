import React, { FC } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';
import LinearProgress from '@material-ui/core/LinearProgress';
import Divider from '@material-ui/core/Divider';

import useStyles from './PlanetQueue.styles';
import BasicQueueItem from './interfaces/basic-queue-item.interface';
import CurrentQueueItem from './interfaces/current-queue-item.interface';

interface Props {
  title: string;
  list: BasicQueueItem[];
  currentQueueItem: CurrentQueueItem | null;
}

const PlanetQueueView: FC<Props> = ({ title, list, currentQueueItem }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography align="center" className={classes.queueTitle}>
        {title}
      </Typography>
      {currentQueueItem !== null ? (
        <List>
          <ListItem>
            <ListItemText className={classes.itemText}>
              <Box display="flex" flexWrap="wrap">
                <Typography className={classes.itemTitle}>
                  {currentQueueItem.name} ({currentQueueItem.nextLevel})
                </Typography>
                <Box width="100%" className={classes.itemContent}>
                  {!currentQueueItem.isFinished ? (
                    <div className={classes.itemRow}>
                      <Box display="flex" flexWrap="wrap" justifyContent="space-between">
                        <span>remaining: </span>
                        <span>{currentQueueItem.remainingDate}</span>
                      </Box>
                      <div className={classes.itemProgress}>
                        <LinearProgress variant="determinate" value={currentQueueItem.remainingPercentage} />
                      </div>
                    </div>
                  ) : (
                    <div>Finished !</div>
                  )}
                </Box>
              </Box>
            </ListItemText>
          </ListItem>
          {list.length > 1 ? <Divider className={classes.divider} /> : null}
          {list.map((item, index) => (
            <React.Fragment key={`planet-queue-item-${item.id}`}>
              <ListItem>
                <ListItemText className={classes.itemText}>
                  <Box display="flex" flexWrap="wrap">
                    <Typography className={classes.itemTitle}>
                      {item.name} ({item.nextLevel})
                    </Typography>
                  </Box>
                </ListItemText>
              </ListItem>
              {list.length - 1 !== index ? <Divider className={classes.divider} /> : null}
            </React.Fragment>
          ))}
        </List>
      ) : (
        <div className={classes.emptyQueue}>Queue empty.</div>
      )}
    </Paper>
  );
};

export default PlanetQueueView;
