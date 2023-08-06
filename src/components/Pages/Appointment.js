import React, { useState, useEffect } from 'react'
import Title from "../Title"
import AppointmentList from '../Appointment/AppointmentList'
import { db } from '../../firebase-config'
import { collection, getDocs, addDoc } from 'firebase/firestore'
import { readData } from '../CRUD/CRUD'

export default function Appointment({ user }) {

  const [appointment, setAppointment] = useState([])


  return (
    <div className='body-container'>
      <Title>{user.role == 'counsellor' ? 'Appointment' : 'Appointment History'}</Title>
      <AppointmentList
        user={user} />
    </div>
  )
}
