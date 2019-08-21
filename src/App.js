import React from 'react';
import logo from './logo.svg';
import Main from './components/MainPage';
import MyEvents from './components/MyEventsPage';
import SubmitEvent from './components/SubmitEventsPage';
import Dashboard from './components/Dashboard';
import Profile from './components/ProfilePage';
import Pending from './components/PendingEventsPage';
import Users from './components/UsersPage';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App" >
      <Router>
        <Route exact path="/" component={Main} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/events" component={MyEvents} />
        <Route path="/pending" component={Pending} />
        <Route path="/submit" component={SubmitEvent} />
        <Route path="/profile" component={Profile} />
        <Route path="/users" component={Users} />
        </Router>
      </div>
  );
}

export default App;