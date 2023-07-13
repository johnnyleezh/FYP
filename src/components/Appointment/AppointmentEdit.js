import React, { useState } from 'react'

function AppointmentEdit({ isOpen, onClose }) {

    if (!isOpen) return null

    return (
        <div>
            <div style={{ backgroundColor: 'beige', marginTop: '1rem', padding: '1rem' }}>
                <div style={{ display: 'flex', fontSize: '1.4rem' }}>
                    <div style={{ flex: 1, textAlign: 'right', paddingRight: '1rem' }}>
                        <p>Title:</p>
                        <p>Counsellor:</p>
                        <p>Time:</p>
                        <p>Date:</p>
                    </div>
                    <div style={{ flex: 1 }}>
                        <p>Feeling Lost</p>
                        <p>Dr. Yao Chin Kuok</p>
                        <p>10:30 AM</p>
                        <p>02/03/2023</p>
                    </div>
                </div>
            </div>

            <div className="cancel">
                <button className="toggle-button" onClick={onClose}>
                    Cancel
                </button>
            </div>
            <div className="actions">
                <button className="toggle-button" onClick={onClose}>
                    Submit
                </button>
            </div>
        </div>


    )
}

export default AppointmentEdit