import React, { FC } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import planetMock from 'src/common/resources/mocks/planet.mock';
import Planet from 'src/common/resources/planet/planet.interface';
import PlanetSummary from '../PlanetSummary';
import PlanetQueue from '../PlanetQueue';
import useStyles from './PlanetOveriew.styles';

interface Props {
  planet: Planet;
}

const PlanetOverviewView: FC<Props> = ({ planet }) => {
  const classes = useStyles();

  return (
    <Box>
      <Box display="flex" justifyContent="center">
        <Typography variant="h3">Overview - {planet.name}</Typography>
      </Box>
      <Box display="flex" justifyContent="space-around" className={classes.content}>
        <PlanetSummary planet={planetMock} />
        <Paper className={classes.queuesContainer}>
          <Typography variant="h4">Queues</Typography>
          <Box display="flex" justifyContent="space-around" className={classes.queues}>
            {planet.queues.map(({ title, list }) => (
              <PlanetQueue key={`planet-queue-${title}`} title={title} list={list} />
            ))}
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default PlanetOverviewView;
