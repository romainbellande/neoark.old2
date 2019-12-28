import React, { FC } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import useStyles from './PlanetSummary.styles';
import SummaryItem from './summary-item.interface';

interface Props {
  list: SummaryItem[];
}

const PlanetSummaryView: FC<Props> = ({ list }) => {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.paper}>
        <Typography className={classes.title}>Summary</Typography>
        <List component={Paper} className={classes.list}>
          {list.map((item, index) => (
            <ListItem key={`planet-summary-item-${index}`} className={classes.listItem}>
              <ListItemText>
                <Box display="flex" justifyContent="space-between">
                  <span className={classes.label}>{item.key}:</span>
                  <span className={classes.value}>{item.value}</span>
                </Box>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Paper>
    </div>
  );
};

export default PlanetSummaryView;
