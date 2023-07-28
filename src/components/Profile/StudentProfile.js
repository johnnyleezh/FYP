import React, { useState, useEffect } from 'react';
import Row from '../Monitor/MonitorRow';
import SessionHistory from '../Session/SessionHistory'
import AppointmentPopUpModal from '../Appointment/AppointmentPopUpModal';
import { readData } from '../CRUD/CRUD';

function StudentProfile({ user, isProfile }) {

  const [isOpen, setIsOpen] = useState(false)
  const [appointment, setAppointment] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const readAppointment = await readData("Appointment", "clientId", user.uniqueId);
      setAppointment(readAppointment)
    };
    fetchData();
  }, []);

  const profileBtn = () => {
    if (user.role == 'counsellor') {
      return (
        <button className='btn' style={{ position: 'absolute', right: '5em', top: '15em' }}>
          Monitor
        </button>
      )
    }
    else if (user.role == 'student') {
      return (
        <button className='btn' style={{ position: 'absolute', right: '5em', top: '15em' }}
          onClick={() => { setIsOpen(true) }}
        >
          Create Appointment
        </button>
      )
    }
  }

  return (
    <div className='contentContainer'>
      {profileBtn()}
      <Row
        isOpen={true}
        detail={user}
      />
      <h1>Upcoming Appointment</h1>
      <SessionHistory
        sessionDetail={appointment}
        role={user.role}
        isProfile={isProfile}
      />
      <AppointmentPopUpModal
        isOpen={isOpen}
        onClose={() => { setIsOpen(false) }}
        createOpen={true}
        user={user}
      />
    </div >
  )
}

export default StudentProfile