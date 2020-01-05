import React, { FC } from 'react';
import Box from '@material-ui/core/Box';
import * as d3 from 'd3-format';
import { useTranslation } from 'react-i18next';

import useStyles from './ResourceBarItem.styles';
import Resource from 'src/common/resources/resource/resource.interface';
import { translationKeys } from 'src/i18n';

const ResourceBarItemView: FC<Resource> = ({ code, amount }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Box display="flex" justifyContent="space-between" className={classes.root}>
      <div className={classes.label}>{t(translationKeys.resources[code].name)}:</div>
      <div>{d3.format(',')(Math.floor(amount))}</div>
    </Box>
  );
};

export default ResourceBarItemView;
