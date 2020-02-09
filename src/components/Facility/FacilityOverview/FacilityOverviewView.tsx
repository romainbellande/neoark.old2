import React, { FC } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

import useStyles from './FacilityOverview.styles';
import Facility from 'src/common/resources/facility/facility.interface';
import getFacilityProduction from 'src/common/resources/formulas/get-facility-production';
import FacilityProductionItem from 'src/common/resources/facility/facility-production-item.interface';
import FacilityCostItem from 'src/common/resources/facility/facility-cost-item.interface';
import { translationKeys } from 'src/i18n';

interface Props extends Facility {
  expanded: boolean;
  onExpand(): void;
  onUpgrade(): void;
  progress?: number;
  remainingDate?: string;
  production: FacilityProductionItem[];
  cost: FacilityCostItem[];
}

const FacilityOverviewView: FC<Props> = ({
  level,
  expanded,
  onExpand,
  cost,
  production,
  onUpgrade,
  progress,
  remainingDate,
  code,
}) => {
  const classes = useStyles();
  const isUpgrading: boolean = typeof progress === 'number';
  const { t } = useTranslation();

  return (
    <Card className={clsx(classes.root, { [classes.rootInProgress]: isUpgrading })}>
      <CardContent className={classes.cardHeader}>
        <Box display="flex" alignItems="center">
          <Typography>
            {t(translationKeys.facilities[code].name)} ({level})
          </Typography>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={onExpand}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon color="inherit" />
          </IconButton>
        </Box>
        <div className={classes.remainingTime} hidden={!isUpgrading}>
          {remainingDate}
        </div>
        <div className={classes.progress} style={{ width: progress ? `${progress}%` : 0 }} />
      </CardContent>
      <Collapse in={expanded} timeout="auto">
        <CardContent>
          <div>{t(translationKeys.facilities[code].description)}</div>
          <Divider className={classes.divider} />
          <div>
            <div className={classes.costTitle}>Current production</div>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Amount per hour</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {production.map(productionItem => (
                    <TableRow key={`table-prod-${productionItem.code}`}>
                      <TableCell component="th" scope="row">
                        {t(translationKeys.resources[productionItem.code].name)}
                      </TableCell>
                      <TableCell align="right">
                        {Math.floor(getFacilityProduction(code, level)[productionItem.code])}/h
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <Divider className={classes.divider} />
          <div>
            <div className={classes.costTitle}>Next level cost</div>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Amount</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cost.map(costItem => (
                    <TableRow key={costItem.code}>
                      <TableCell component="th" scope="row">
                        {t(translationKeys.resources[costItem.code].name)}
                      </TableCell>
                      <TableCell align="right">{Math.floor(costItem.amount)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Box display="flex" flexDirection="row-reverse" className={classes.actions}>
              <Button type="button" variant="contained" onClick={onUpgrade} disabled={isUpgrading}>
                Upgrade
              </Button>
            </Box>
          </div>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default FacilityOverviewView;
