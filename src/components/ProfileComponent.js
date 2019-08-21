import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import ProfilePage from './ProfilePage';
import { Link } from 'react-router-dom'


const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Profile</Title>
      <Typography component="p" variant="h4">
       Picture
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        Name, etc
      </Typography>
      <div>
        <Link to="/profile">About</Link>
      </div>
    </React.Fragment>
  );
}