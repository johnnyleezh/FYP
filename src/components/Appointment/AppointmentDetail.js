import React, { useState, useEffect } from 'react';
import AppointmentCancel from './AppointmentCancel';
import { deleteData } from '../CRUD/CRUD';

function AppointmentDetail({ isOpen, onClose, onEdit, onRecord, detail, counsellor }) {

  const [appointmentDetails, setAppointmentDetails] = useState(detail)
  const [cancelOpen, setCancelOpen] = useState(false)
  useEffect(() => {
    // Perform any logic here that needs to happen when detail changes
    // You can access the updated detail prop here
    // For example:
    setAppointmentDetails(detail)
    console.log('Updated detail:', detail);
  }, [detail]);

  const cancelAppt = () => {
    deleteData("Appointment", detail.uniqueId)
  }
  const apptCancel = () => {
    cancelAppt();
    onClose();
  };
  if (!isOpen) return null
  return (
    <div>
      <div style={{ backgroundColor: 'beige', marginTop: '0rem', padding: '1rem' }}>
        <div style={{ display: 'flex', fontSize: '1.4rem' }}>
          <div style={{ flex: 1, textAlign: 'right', paddingRight: '1rem' }}>
            <p>Title:</p>
            <p>Counsellor:</p>
            <p>Date:</p>
            <p>Time:</p>
          </div>
          <div className="neutral">
            <button className="toggle-button" onClick={onEdit} style={{ position: 'absolute', right: '3rem' }}>
              Edit details
            </button>
          </div>
          <div style={{ flex: 1 }}>
            <p>{detail.title}</p>
            <p>{counsellor.name}</p>
            <p>{detail.date}</p>
            <p>{detail.time}</p>
          </div>
        </div>

        <div style={{display:'flex', flexDirection:'row', width: '30rem',  margin:'auto'}}>
        <div className="cancel" style={{flex:1, alignItems:'flex-start'}}>
            <button className="toggle-button" onClick={() => { setCancelOpen(true) }}>
              Cancel Appointment
            </button>
          </div>
          <div className="actions" style={{flex:1}}>
            <button className="toggle-button" onClick={onRecord}>
              Record Session
            </button>
          </div>
        </div>
        <div className="neutral" style={{ position: 'absolute', right: '3rem', bottom: '2.5rem' }}>
          <button className="toggle-button" onClick={onClose}>
            Return
          </button>
        </div>
      </div>
      <AppointmentCancel isOpen={cancelOpen} onClose={() => { setCancelOpen(false) }} onCancel={apptCancel} />
    </div>
  )
}

export default AppointmentDetail