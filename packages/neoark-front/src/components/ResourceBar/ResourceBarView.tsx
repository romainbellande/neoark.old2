import React, { FC } from 'react';
import Box from '@material-ui/core/Box';

import ResourceBarItem from './ResourceBarItem';
import { Props as ResourceBarItemProps } from './ResourceBarItem/ResourceBarItemView';
import useStyles from './ResourceBar.styles';

interface Props {
  items: ResourceBarItemProps[];
}

const ResourceBarView: FC<Props> = ({ items }) => {
  const classes = useStyles();

  return (
    <Box display="flex" justifyContent="center" className={classes.root}>
      {items.map(({ label, value }) => (
        <ResourceBarItem key={`resource-bar-item-${label}`} label={label} value={value} />
      ))}
    </Box>
  );
};

export default ResourceBarView;
