import React from 'react';
import Title from './Title';
import { Link } from 'react-router-dom';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData('00:00', 0),
  createData('03:00', 300),
  createData('06:00', 600),
  createData('09:00', 800),
  createData('12:00', 1500),
  createData('15:00', 2000),
  createData('18:00', 2400),
  createData('21:00', 2400),
  createData('24:00', undefined),
];

export default function MyEventsComponent() {
  return (
    <React.Fragment>
      <Title>Your Events</Title>
        blah, blah, blah
        <Link to="/submit">Submit an Event</Link>
        <Link to="/events">Manage Events</Link>
    </React.Fragment>
  );
}