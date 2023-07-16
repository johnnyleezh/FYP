import React, { useState } from 'react'

function AppointmentEdit({ isOpen, onClose, detail }) {

    const [editDetails, setEditDetails] = useState(detail)

    if (!isOpen) return null

    const handleChange = (e) => {
        setEditDetails({
            ...editDetails,
            title: e.target.value
        });
    };

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
                    <div style={{ flex: 1 }}>
                        {/* <p>Feeling Lost</p> */}
                        <input type="text" name="fname" value={editDetails.title} onChange={handleChange} style={{ fontSize: '1.4rem' }}></input>
                        <p>{detail.counsellor}</p>
                        <p>{detail.date}</p>
                        <p>{detail.time}</p>
                    </div>
                </div>
            </div>

            <div className="actions">
                <button className="toggle-button" onClick={onClose}>
                    Submit
                </button>
            </div>
            <div className="cancel">
                <button className="toggle-button" onClick={onClose}>
                    Cancel
                </button>
            </div>
        </div>


    )
}

export default AppointmentEdit