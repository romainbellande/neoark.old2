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

import useStyles from './FacilityOverview.styles';
import Facility from 'src/common/resources/facility/facility.interface';
import getProductionPerHour from 'src/common/resources/formulas/get-production-per-hour';

interface Props extends Facility {
  expanded: boolean;
  onExpand(): void;
  onUpgrade(): void;
}

const FacilityOverviewView: FC<Props> = ({
  name,
  level,
  description,
  expanded,
  onExpand,
  cost,
  production,
  onUpgrade,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Box display="flex" alignItems="center">
          <Typography>
            {name} ({level})
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
      </CardContent>
      <Collapse in={expanded} timeout="auto">
        <CardContent>
          <div>{description}</div>
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
                    <TableRow key={productionItem.name}>
                      <TableCell component="th" scope="row">
                        {productionItem.name}
                      </TableCell>
                      <TableCell align="right">
                        {Math.floor(getProductionPerHour(productionItem.code, level))}/h
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
                    <TableRow key={costItem.name}>
                      <TableCell component="th" scope="row">
                        {costItem.name}
                      </TableCell>
                      <TableCell align="right">{costItem.amount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Box display="flex" flexDirection="row-reverse" className={classes.actions}>
              <Button type="button" variant="contained" onClick={onUpgrade}>
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
