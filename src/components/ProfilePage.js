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

export default function ProfilePage() {
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
        <Link color="primary" href="javascript:;">
          Edit Profile
        </Link>
        <Link color="primary" href="javascript:;">
          Delete Profile
        </Link>
      </div>
    </React.Fragment>
  );
}