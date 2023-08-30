import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Appointment from './components/Pages/Appointment';
import Session from './components/Pages/Session';
import StudentList from './components/Pages/StudentList';
import Profile from './components/Pages/Profile';
import HelpResource from './components/Pages/HelpResources';
import MentalHealthTest from './components/Pages/MentalHealthTest';
import { readSpecificData } from './components/CRUD/CRUD';

function App() {
  const [user, setUser] = useState({});

  const fetchUserData = async (userId) => {
    const userData = await readSpecificData("User", userId);
    setUser(userData);
  };

  useEffect(() => {
    fetchUserData("KQE0CQ7lk0Y9SabrgPz7");
  }, []);

  const userRoles = {
    counsellor: "KQE0CQ7lk0Y9SabrgPz7",
    student: "uYSA6hK2ZXwEjzFsKt1l",
    advisor: "ehVrVYtpuMwQwed7kepk"
  };

  const changeUser = () => {
    const nextRole = user.role === 'counsellor' ? 'student' : user.role === 'student' ? 'advisor' : 'counsellor';
    fetchUserData(userRoles[nextRole]);
  };

  return (
    <>
      <Router>
        <Navbar user={user} changeUser={changeUser} />
        <Switch>
          <Route path='/' exact render={() => <Home user={user} />} />
          <Route path='/appointment' render={() => <Appointment user={user} />} />
          <Route path='/session' render={() => <Session user={user} />} />
          <Route path='/students' render={() => <StudentList user={user} />} />
          <Route path='/profile' render={() => <Profile user={user} />} />
          <Route path='/helpresource' component={HelpResource} />
          <Route path='/MentalHealthTest' render={() => <MentalHealthTest user={user} />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
