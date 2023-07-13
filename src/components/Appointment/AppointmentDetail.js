import React, { useState } from 'react'

function AppointmentDetail({ isOpen, onClose, onEdit }) {

  if (!isOpen) return null

  return (
    <div>
      <div style={{ backgroundColor: 'beige', marginTop: '1rem', padding: '1rem' }}>
        <div style={{ display: 'flex', fontSize: '1.4rem' }}>
          <div style={{ flex: 1, textAlign: 'right', paddingRight: '1rem' }}>
            <p>Date:</p>
            <p>Time:</p>
            <p>Counsellor:</p>
            <p>Title:</p>
          </div>
          <div className="neutral">
            <button className="toggle-button" onClick={onEdit} style={{ position: 'absolute', right: '3rem' }}>
              Edit details
            </button>
          </div>
          <div style={{ flex: 1 }}>
            <p>02/03/2023</p>
            <p>10:30 AM</p>
            <p>Dr. Yao Chin Kuok</p>
            <p>Feeling Lost</p>
          </div>
        </div>
      </div>
      <div>
        <div className="actions">
          <button className="toggle-button" onClick={{}}>
            Start Session
          </button>
        </div>
        <div className="cancel">
          <button className="toggle-button" onClick={{}}>
            Cancel Appointment
          </button>
        </div>
        <div className="neutral" style={{ position: 'absolute', right: '1rem', bottom: '1rem' }}>
          <button className="toggle-button" onClick={onClose}>
            Return
          </button>
        </div>
      </div>
    </div>
  )
}

export default AppointmentDetail