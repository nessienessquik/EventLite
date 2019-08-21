import React from 'react';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';


import Link from '@material-ui/core/Link';
import ErrorPage from './ErrorPage';
// import logo from './logo.svg';

class Footer extends React.Component {
    render() {
      return <Grid className="Footer">
        <AppBar className="footer">
          <Toolbar>
            <Button >About</Button>
            <Button >FAQ's</Button>
            <Button >Careers</Button>
            <Button >Press</Button>
            <Button >Terms</Button>
            <Button >Privacy</Button>
            <Button >Cookies</Button>
          </Toolbar>
        </AppBar>

      </Grid>;
    }
  }

export default Footer;
