import React, { useState } from 'react'

function AppointmentEdit({ isOpen, onClose, detail, editedDetail, counsellor }) {

    const updateDetail = () => {

    }

    const [editDetails, setEditDetails] = useState(detail)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        editedDetail(editDetails); // Call the editedDetail prop with edited data
        // editDetails()
        onClose();
    };


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
                    <div style={{ flex: 1 }}>
                        <input type="text" name="title" value={editDetails.title} onChange={handleChange} style={{ fontSize: '1.4rem' }}></input>
                        <input type="text" name="counsellorId" value={counsellor.name} onChange={handleChange} style={{ fontSize: '1.4rem' }}></input>
                        <input type="text" name="date" value={editDetails.date} onChange={handleChange} style={{ fontSize: '1.4rem' }}></input>
                        <input type="text" name="time" value={editDetails.time} onChange={handleChange} style={{ fontSize: '1.4rem' }}></input>
                    </div>
                </div>
            </div>

            <div className="actions">
                <button className="toggle-button" onClick={handleSubmit}>
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