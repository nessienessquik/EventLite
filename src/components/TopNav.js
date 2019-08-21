import React from 'react';
import Grid from '@material-ui/core/Grid';
import logo from '../images/logo.svg';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';


class TopNav extends React.Component {

    render() {
      return <Grid className="TopNav">
        <AppBar position="static">
          <Toolbar>
            <Button className="TopNavMenuItem"><img src={logo} alt="logo" className="NavLogo" /></Button>
            <Button className="TopNavMenuItem">Create Event</Button>
            <Button className="TopNavMenuItem">Login</Button>
          </Toolbar>
        </AppBar>
       
      </Grid>;
    }
  }

export default TopNav;
