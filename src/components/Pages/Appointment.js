import React, { useState, useEffect } from 'react';
import Title from "../Title";
import AppointmentList from '../Appointment/AppointmentList';
import { db } from '../../firebase-config';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { readData } from '../CRUD/CRUD';

export default function Appointment({ user }) {
  const [appointment, setAppointment] = useState([]);

  const getTitle = () => {
    return user.role === 'counsellor' ? 'Appointment' : 'Appointment History';
  };

  return (
    <div className='body-container'>
      <Title>{getTitle()}</Title>
      <AppointmentList user={user} />
    </div>
  );
}
