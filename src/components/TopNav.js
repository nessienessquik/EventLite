import React from 'react';
import ModalButton from './ModalButton';
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
            <ModalButton buttonName="Sign-Up" buttonComponent="SignUpPage"/>
            <ModalButton buttonName="Log-In" buttonComponent="LogInPage"/>
          </Toolbar>
        </AppBar>
       
      </Grid>;
    }
  }

export default TopNav;
