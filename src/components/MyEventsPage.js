import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, '16 Mar, 2019', 'Charity Basketball Game', 'Atlanta, GA', '8:00 PM', 10.06),
  createData(1, '16 Mar, 2019', 'Blackrock Happy Hour', 'Marietta, GA', '6:00 PM', 10.01),
  createData(2, '17 Mar, 2019', 'Coding While Black', 'Macon, GA', '9:00 PM', "Free"),
  createData(3, '19 Mar, 2019', 'Pop-Up Shop', 'Atlanta, GA', '8:00 AM', "Free"),
  createData(4, '25 Mar, 2019', 'Coding Workshop', 'Atlanta, GA', '9:00 AM', "Free"),
];

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function PendingEvents() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>My Events</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Event Name</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Time</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
      <Link to="/submit">Submit an Event</Link>
      <br></br>
       <Link to="/events">View More Events</Link>
      </div>
    </React.Fragment>
  );
}