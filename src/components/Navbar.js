import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ user, changeUser }) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);


  //Navigation for Counsellor
  if (user.role == 'counsellor') {
    return (
      <>
        <nav className='navbar'>
          <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              UTAR
              <i class='fab fa-typo3' />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link
                  to='/appointment'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Appointment
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/session'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Session
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/students'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Student List
                </Link>
              </li>
            </ul>
            {button && <Button buttonStyle='btn--outline' onClick={changeUser}>Counsellor</Button>}
          </div>
        </nav>
      </>
    );
  }
  else if (user.role == 'student') {
    //Navigation for Student
    return (
      <>
        <nav className='navbar'>
          <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              UTAR
              <i class='fab fa-typo3' />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link
                  to='/helpresource'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Help Resources
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/session'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Session
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/MentalHealthTest'
                  className='nav-links'
                  onClick={closeMobileMenu}
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
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              UTAR
              <i class='fab fa-typo3' />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
