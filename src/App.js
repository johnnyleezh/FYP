import React from 'react';
import Navbar from './components/CounsellorComponents/Navbar';
import './App.css';
import Home from './components/CounsellorComponents/CounsellorPages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Appointment from './components/CounsellorComponents/CounsellorPages/Appointment';
import Session from './components/CounsellorComponents/CounsellorPages/Session';
import StudentList from './components/CounsellorComponents/CounsellorPages/StudentList';
import Profile from './components/CounsellorComponents/CounsellorPages/Profile'

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
