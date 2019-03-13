import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import mockTableData from './mockTableData';

const styles = theme => ({
  root: {
    width: '80%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 400,
  },
});


function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell><b>OrganizationName</b></TableCell>
            <TableCell align="right"><b> PlanType</b></TableCell>
            <TableCell align="right"><b>Product</b></TableCell>
            <TableCell align="right"><b>Segment</b></TableCell>
            <TableCell align="right"><b>Geography</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mockTableData.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.OrganizationName}
              </TableCell>
              <TableCell align="right">{row.PlanType}</TableCell>
              <TableCell align="right">{row.Product}</TableCell>
              <TableCell align="right">{row.Segment}</TableCell>
              <TableCell align="right">{row.Geography}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
//export default Table;