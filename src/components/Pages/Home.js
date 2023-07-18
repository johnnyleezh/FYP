import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../../App';
import { Button } from '../Button';
import './Home.css';
import Monitor from '../Monitor/MonitorList';
import Title from '../Title';
import StudentProfile from '../Profile/StudentProfile'

function Home({role}) {

  const students = {
    profilePic: '/images/jingyuan.webp',
    name: 'Johnny',
    studentId: '1800795',
    course: 'Software Engineering',
    trimester: 'Y5S2',
    attendance: '83',
    mentalHealth: '63',
    address: '/profile',
    appt: '01/02/2023',
    lastTested: '02/03/2022'
  }

  if (role == 'counsellor') {
    return (
      <div className='body-container'>
        <Title title="Counsellor Home" />
        <Monitor />
      </div>
    );
  }
  else if (role == 'student') {
    return (
      <div className='body-container'>
        <Title title="Student Home" />
        <StudentProfile 
        role={{role}}
      detail={students}
      />
      </div>
    );
  }
  else {
    return (
      <div className='hero-container'>
        <Title title="Academic Advisor Home" />
        <Monitor />
      </div>
    );
  }
}

export default Home;
