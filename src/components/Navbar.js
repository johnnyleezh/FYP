import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import PsychologyIcon from '@mui/icons-material/Psychology';
import './Navbar.css';

function Navbar({ user, changeUser }) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(click);

  //Navigation for Counsellor
  if (user.role == 'counsellor') {
    return (
      <>
        <nav className='navbar'>
          <div className='navbar-container'>
            <Link to='/' className='navbar-logo' >
              UTAR
              <PsychologyIcon fontSize='4rem' />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link
                  to='/appointment'
                  className='nav-links'
                >
                  Appointment
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/session'
                  className='nav-links'
                >
                  Session
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/students'
                  className='nav-links'
                >
                  Student List
                </Link>
              </li>
            </ul>
            {button && <Button buttonStyle='btn--outline' onClick={changeUser}>Counsellor</Button>}
          </div>
        </nav >
      </>
    );
  }
  else if (user.role == 'student') {
    //Navigation for Student
    return (
      <>
        <nav className='navbar'>
          <div className='navbar-container'>
            <Link to='/' className='navbar-logo' >
              UTAR
              <PsychologyIcon fontSize='4rem' />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link
                  to='/helpresource'
                  className='nav-links'
                >
                  Help Resources
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/session'
                  className='nav-links'
                >
                  Session
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/MentalHealthTest'
                  className='nav-links'
                >
                  Mental Health Test
                </Link>
              </li>
            </ul>
            {button && <Button buttonStyle='btn--outline' onClick={changeUser} >Student</Button>}
          </div>
        </nav>
      </>
    );
  }
  else {
    //Navigation for Academic Advisor
    return (
      <>
        <nav className='navbar'>
          <div className='navbar-container'>
            <Link to='/students' className='navbar-logo' >
              UTAR
              <PsychologyIcon fontSize='4rem' />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link
                  to='/students'
                  className='nav-links'
                >
                  Student List
                </Link>
              </li>
            </ul>
            {button && <Button buttonStyle='btn--outline' onClick={changeUser}>Academic Advisor</Button>}
          </div>
        </nav >
      </>
    );
  }
}

export default Navbar;
