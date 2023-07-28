import React, { useState, useEffect } from 'react'
import '../Pages/Appointment.css'
import Title from "../Title"
import AppointmentList from '../Appointment/AppointmentList'
import { db } from '../../firebase-config'
import { collection, getDocs, addDoc } from 'firebase/firestore'
import { readData } from '../CRUD/CRUD'

export default function Appointment({ user }) {

  const [appointment, setAppointment] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const fetchData = await readData("Appointment", user.role === 'student' ? 'clientId' : 'counsellorId', user.uniqueId);
      setAppointment(fetchData)
    };
    fetchData();
  }, []);
  return (
    <div className='body-container'>
      <Title>{user.role == 'counsellor' ? 'Appointment' : 'Appointment History'}</Title>
      <AppointmentList
        detail={appointment}
        user={user} />
    </div>
  )
}
