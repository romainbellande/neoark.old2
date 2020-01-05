import React, { FC } from 'react';
import Box from '@material-ui/core/Box';

import useStyles from './FacilityListItem.styles';

interface Props {
  name: string;
  level: number;
  onClick(): void;
}

const FacilityView: FC<Props> = ({ name, level, onClick }) => {
  const classes = useStyles();

  return (
    <Box display="flex" className={classes.root} justifyContent="space-between" onClick={onClick}>
      <div>{name}</div>
      <div>({level})</div>
    </Box>
  );
};

export default FacilityView;
