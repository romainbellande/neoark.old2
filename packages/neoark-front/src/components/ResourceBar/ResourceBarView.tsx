import React, { FC } from 'react';
import Box from '@material-ui/core/Box';

import ResourceBarItem from './ResourceBarItem';
import Resource from 'src/common/resources/resource/resource.interface';
import useStyles from './ResourceBar.styles';

interface Props {
  items: Resource[];
}

const ResourceBarView: FC<Props> = ({ items }) => {
  const classes = useStyles();

  return (
    <Box display="flex" justifyContent="center" className={classes.root}>
      {items.map(({ code, amount }) => (
        <ResourceBarItem key={`resource-bar-item-${code}`} code={code} amount={amount} />
      ))}
    </Box>
  );
};

export default ResourceBarView;
