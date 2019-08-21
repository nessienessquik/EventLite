import React from 'react';
import logo from './logo.svg';
import Main from './components/MainPage';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <div className="App" >
      <Router>
        <Route exact path="/" component={Main} />
        {/* <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} /> */}
        </Router>
      </div>
  );
}

export default App;