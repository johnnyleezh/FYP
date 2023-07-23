import React, { useState } from 'react'
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

function App() {

  const [isCounsellor, setIsCounsellor] = useState("counsellor")
  const [isStudent, setIsStudent] = useState("student")
  const [isAcademicAdvisor, setIsAcademicAdvisor] = useState("advisor")
  const [role, setRole] = useState(isCounsellor)

  const changeRole = () => {
    if (role == isCounsellor) {
      setRole(isStudent)
    }
    else {
      setRole(isCounsellor)
    }
  }

  return (
    <>
      <Router>
        <Navbar
          role={role}
          changeRole={() => { changeRole() }}
        />
        <Switch>
          <Route
            path='/'
            exact
            render={(props) => <Home {...props} role={role} />} // Pass your data as a prop
          />
          <Route path='/appointment' component={Appointment} />
          <Route
            path='/session'
            render={(props) => <Session {...props} role={role} />}
          />
          <Route path='/students' component={StudentList} />
          <Route path='/profile' component={Profile} />
          <Route path='/helpresource' component={HelpResource} />
          <Route path='/MentalHealthTest' component={MentalHealthTest} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
