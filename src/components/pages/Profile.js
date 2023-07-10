import React from 'react';
import '../../App';
import { Button } from '../Button';
import './Profile.css';
import Title from '../Title';
import StudentProfile from '../Profile/studentProfile';

function Profile() {
  return (
    <div className='hero-container'>
      <Title title="Profile"/>
      <StudentProfile />
    </div>
  );
}

export default Profile;
