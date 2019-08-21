import React from 'react';
import Header from './Header';
import TopNav from './TopNav';
import Footer from './Footer';
import MainPageContent from './MainPageContent';
import Grid from '@material-ui/core/Grid';
// import logo from './logo.svg';
import HeroImg from '../images/main-events-page/header001.jpg';

class Main extends React.Component {
    render() {
      return <Grid>
          <TopNav />
          <Header />
          <MainPageContent />
          <Footer />
      </Grid>;
    }
  }

export default Main;
