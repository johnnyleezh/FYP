import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import PsychologyIcon from '@mui/icons-material/Psychology';
import './Navbar.css';

function Navbar({ user, changeUser }) {
  const [click, setClick] = useState(false);

  // Toggle the navigation menu
  const handleClick = () => setClick(!click);

  // Define navigation links and items based on user roles
  const getNavigationItems = () => {
    if (user.role === 'counsellor') {
      return [
        { to: '/appointment', label: 'Appointment' },
        { to: '/session', label: 'Session' },
        { to: '/students', label: 'Student List' },
      ];
    } else if (user.role === 'student') {
      return [
        { to: '/helpresource', label: 'Help Resources' },
        { to: '/session', label: 'Session' },
        { to: '/MentalHealthTest', label: 'Mental Health Test' },
      ];
    } else {
      return [{ to: '/students', label: 'Student List' }];
    }
  };

  const navigationItems = getNavigationItems();

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo'>
          UTAR
          <PsychologyIcon fontSize='4rem' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          {navigationItems.map((item, index) => (
            <li className='nav-item' key={index}>
              <Link to={item.to} className='nav-links'>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* {user.role && (
          <Button buttonStyle='btn--outline' onClick={changeUser}>
            {user.role === 'counsellor'
              ? 'Counsellor'
              : user.role === 'student'
              ? 'Student'
              : 'Academic Advisor'}
          </Button>
        )} */}
      </div>
    </nav>
  );
}

export default Navbar;
