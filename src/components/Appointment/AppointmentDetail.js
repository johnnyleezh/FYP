import React, { useState } from 'react';
import AppointmentCancel from './AppointmentCancel';

function AppointmentDetail({ isOpen, onClose, onEdit, onRecord, detail }) {

  const [appointmentDetails, setAppointmentDetails] = useState(detail)
  const [cancelOpen, setCancelOpen] = useState(false)

  const apptCancel = () => {
    //Back end stuff


    onClose()
  }

  if (!isOpen) return null

  return (
    <div>
      <div style={{ backgroundColor: 'beige', marginTop: '1rem', padding: '1rem' }}>
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
            <p>{appointmentDetails.title}</p>
            <p>{appointmentDetails.counsellor}</p>
            <p>{appointmentDetails.date}</p>
            <p>{appointmentDetails.time}</p>
          </div>
        </div>
      </div>
      <div>
        <div className="actions">
          <button className="toggle-button" onClick={onRecord}>
            Record Session
          </button>
        </div>
        <div className="cancel">
          <button className="toggle-button" onClick={() => { setCancelOpen(true) }}>
            Cancel Appointment
          </button>
        </div>
        <div className="neutral" style={{ position: 'absolute', right: '1rem', bottom: '1rem' }}>
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