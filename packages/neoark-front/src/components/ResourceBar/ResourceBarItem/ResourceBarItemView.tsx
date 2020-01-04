import React, { FC } from 'react';
import Box from '@material-ui/core/Box';
import * as d3 from 'd3-format';

import useStyles from './ResourceBarItem.styles';

export interface Props {
  label: string;
  value: number;
}

const ResourceBarItemView: FC<Props> = ({ label, value }) => {
  const classes = useStyles();

  return (
    <Box display="flex" justifyContent="space-between" className={classes.root}>
      <div className={classes.label}>{label}:</div>
      <div>{d3.format(',')(Math.floor(value))}</div>
    </Box>
  );
};

export default ResourceBarItemView;
