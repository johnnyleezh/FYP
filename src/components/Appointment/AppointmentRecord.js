import React, { useState } from 'react';

function AppointmentRecord({ isOpen, onClose, detail }) {

    const [recordDetails, setRecordDetails] = useState(detail)

    if (!isOpen) return null

    const handleChange = (e) => {
        setRecordDetails({
            ...recordDetails,
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
                    </div>
                    <div style={{ flex: 1 }}>
                        <p>{recordDetails.title}</p>
                        <p>{recordDetails.counsellorId}</p>
                    </div>
                </div>
                <div style={{ display: 'flex', fontSize: '1.4rem' }}>
                    <div style={{ flex: 1, textAlign: 'right', paddingRight: '1rem' }}>
                        <p>Time: {recordDetails.time}</p>
                    </div>
                    <div style={{ flex: 1, textAlign: 'left', paddingRight: '1rem' }}>
                        <p>Date: {recordDetails.date}</p>
                    </div>
                </div>
                <div className='recordTextArea'>
                    <textarea id="w3review" name="w3review" rows="20" cols="120" />
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

export default AppointmentRecord