import React from 'react';
import '../Pages/Appointment.css';
import Title from "../Title";
import AppointmentList from '../Appointment/AppointmentList';

export default function Appointment() {
  return (
    <div className='body-container'>
      <Title>Appointment</Title>
      <AppointmentList />
    </div>
  )
}
