import React, { useState, useEffect } from 'react';
import { createData, deleteData } from '../CRUD/CRUD';

function AppointmentRecord({ isOpen, onClose, onCloseRecord, detail, counsellor, mentalHealth }) {
    console.log(mentalHealth)
    const [recordDetails, setRecordDetails] = useState({
        appointmentId: detail.uniqueId,
        clientId: detail.clientId,
        counsellorId: detail.counsellorId,
        date: detail.date,
        healthId: mentalHealth.uniqueId ? mentalHealth.uniqueId : '',
        title: detail.title
    });
    console.log("Record received student details", detail)
    useEffect(() => {
        setRecordDetails({
            appointmentId: detail.uniqueId,
            clientId: detail.clientId,
            counsellorId: detail.counsellorId,
            date: detail.date,
            healthId: mentalHealth.uniqueId ? mentalHealth.uniqueId : '',
            title: detail.title
        })
    }, [detail, mentalHealth]);
    const handleChange = (e) => {
        setRecordDetails({
            ...recordDetails,
            summaryText: e.target.value
        });
        console.log(recordDetails)
    };

    const createSession = () => {
        createData("Session", recordDetails)
        deleteData("Appointment", detail.uniqueId)
        onClose();
    }

    if (!isOpen) return null

    return (
        <div>
            <div style={{ backgroundColor: 'beige', marginTop: '0.1rem', padding: '1rem' }}>
                <div style={{ display: 'flex', fontSize: '1.4rem' }}>
                    <div style={{ flex: 1, textAlign: 'right', paddingRight: '1rem' }}>
                        <p>Title:</p>
                        <p>Counsellor:</p>
                        <p>Date:</p>
                    </div>
                    <div style={{ flex: 1 }}>
                        <p>{detail.title}</p>
                        <p>{counsellor.name}</p>
                        <p>{detail.date}</p>
                    </div>
                </div>
                <div className='recordTextArea'>
                    <textarea style={{ whiteSpace: "pre-wrap" }} id="w3review" name="w3review" rows="20" cols="120" onChange={handleChange} />
                </div>


                <div className="actions">
                    <button className="toggle-button" onClick={createSession}>
                        Submit
                    </button>
                </div>
                <div className="cancel">
                    <button className="toggle-button" onClick={onCloseRecord}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>


    )
}

export default AppointmentRecord