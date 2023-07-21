import React from 'react';
import '../../App';
import { Button } from '../Button';
import './Profile.css';
import Title from '../Title';
import StudentProfile from '../Profile/StudentProfile'
import { useLocation } from 'react-router-dom';

function Profile() {
  const location = useLocation();
  const { detail } = location.state;
  const role = 'counsellor'
  return (
    <div className='body-container'>
      <Title title="Profile"/>
      <StudentProfile 
      role={role}
      detail={detail}
      />
    </div>
  );
}

export default Profile;