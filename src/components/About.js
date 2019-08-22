import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function About() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>About Us</Title>
      <Typography component="p" variant="h4">
       Stuff...
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        More Stuff...
      </Typography>
    </React.Fragment>
  );
}