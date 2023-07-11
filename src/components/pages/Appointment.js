import React from 'react';
import '../pages/Appointment.css';
import Title from "../Title";
import AppointmentList from '../Appointment/AppointmentList';

export default function Appointment() {
  return (
    <div className='appointment-container'>
      <Title title="Appointment"/>
      <AppointmentList />
    </div>
  )
}
