import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Appointment from './components/pages/Appointment';
import Session from './components/pages/Session';
import StudentList from './components/pages/StudentList';
import Profile from './components/pages/Profile'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/appointment' component={Appointment} />
          <Route path='/session' component={Session} />
          <Route path='/students' component={StudentList} />
          <Route path='/profile' component={Profile} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
