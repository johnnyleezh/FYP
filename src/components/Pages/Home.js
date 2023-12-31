import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../../App';
import './Home.css';
import Monitor from '../Monitor/MonitorList';
import Title from '../Title';
import StudentProfile from '../Profile/StudentProfile'
import CreateTable from '../../CreateTable'
import { readData, updateData, deleteData, readSpecificData } from '../CRUD/CRUD';

function Home({ user }) {
  const [mentalHealth, setMentalHealth] = useState([])

  const renderCounsellorView = () => (
    <div className='body-container'>
      {/* <CreateTable /> */}
      {/* <button onClick={() => readData("Appointment", "clientId", "uYSA6hK2ZXwEjzFsKt1l")}>Read</button>
      <button onClick={() => readSpecificData("User", "uYSA6hK2ZXwEjzFsKt1l")}>Specific Read</button>
      <button onClick={() => updateData("Appointment", "UxJtluYkOx6SYrjf65aY", { title: "Gamer addict symdrome" })}>Update</button>
      <button onClick={() => deleteData("Appointment", "")}>Delete</button> */}
      <Title>Home</Title>
      <Monitor
        user={user}
        isOpen={true}
        mental={(e) => { setMentalHealth(e) }}
      />
    </div>
  );

  const renderStudentView = () => (
    <div className='body-container'>
      <Title>Home</Title>
      <StudentProfile
        role={'student'}
        user={user}
        profile={user}
        isProfile={true}
      />
    </div>
  );

  const renderDefaultView = () => (
    <div className='hero-container'>
      <Title>Home</Title>
      <Monitor />
    </div>
  );

  if (user.role === 'counsellor') {
    return renderCounsellorView();
  } else if (user.role === 'student') {
    return renderStudentView();
  } else {
    return renderDefaultView();
  }
}

export default Home;
