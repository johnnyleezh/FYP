import React, { useState, useEffect } from 'react'
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Pages/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Appointment from './components/Pages/Appointment'
import Session from './components/Pages/Session'
import StudentList from './components/Pages/StudentList'
import Profile from './components/Pages/Profile'
import HelpResource from './components/Pages/HelpResources'
import MentalHealthTest from './components/Pages/MentalHealthTest'
import { db } from './firebase-config'
import { collection, getDocs } from 'firebase/firestore'
import { readSpecificData } from './components/CRUD/CRUD';

function App() {

  const [user, setUser] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const readUser = await readSpecificData("User", "KQE0CQ7lk0Y9SabrgPz7");
      setUser(readUser)
    };
    fetchData();
  }, []);

  const [isCounsellor, setIsCounsellor] = useState("counsellor")
  const [isStudent, setIsStudent] = useState("student")
  const [isAcademicAdvisor, setIsAcademicAdvisor] = useState("advisor")
  const [role, setRole] = useState(isCounsellor)

  const changeUser = () => {
    if (user.role === 'counsellor') { // Change to student
      const fetchData = async () => {
        const readUser = await readSpecificData("User", "uYSA6hK2ZXwEjzFsKt1l");
        setUser(readUser);
      };
      fetchData();
    } else if (user.role === 'student') { // Change to academic advisor
      const fetchData = async () => {
        const readUser = await readSpecificData("User", "ehVrVYtpuMwQwed7kepk");
        setUser(readUser);
      };
      fetchData();
    } else { // Change back to counsellor
      const fetchData = async () => {
        const readUser = await readSpecificData("User", "KQE0CQ7lk0Y9SabrgPz7");
        setUser(readUser);
      };
      fetchData();
    }
  };


  return (
    <>
      <Router>
        <Navbar
          user={user}
          changeUser={() => { changeUser() }}
        />
        <Switch>
          <Route
            path='/'
            exact
            render={() => <Home user={user} />} // Pass your data as a prop
          />
          <Route
            path='/appointment'
            render={() => <Appointment user={user} />}
          />
          <Route
            path='/session'
            render={(props) => <Session user={user} />}
          />
          <Route
            path='/students'
            render={(props) => <StudentList user={user} />}
          />
          <Route
            path='/profile'
            render={(props) => <Profile user={user} />}
          />
          <Route path='/helpresource' component={HelpResource} />
          <Route
            path='/MentalHealthTest'
            render={(props) => <MentalHealthTest user={user} />}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
