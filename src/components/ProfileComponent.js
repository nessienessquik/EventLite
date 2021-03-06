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
      <Title>MThee95</Title>
      <Typography component="p" variant="h4">
       <img src="https://www.dreshare.com/wp-content/uploads/2019/03/Megan-Thee-Stallion.jpg" width="200px" />
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
      Megan Pete
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        Member Since July 2017
      </Typography>
      <div>
        <Link to="/profile">Profile Settings</Link>
      </div>
    </React.Fragment>
  );
}