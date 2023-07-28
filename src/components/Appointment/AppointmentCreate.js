import React, { useState } from 'react';
import Edit from './AppointmentEdit';
import { db } from '../../firebase-config'
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { createData } from '../CRUD/CRUD';

function AppointmentCreate({ isOpen, onClose, user }) {

    const apptCollectionRef = collection(db, "Appointment")
    console.log("Opening from create appointment", user)

    const createUser = () => {
        createData("Appointment", createApptDetails)
    }

    const [createApptDetails, setCreateApptDetails] = useState({
        clientId: user.role=='student' ? user.uniqueId : "",
        title: "",
        counsellorId: user.role=='student' ? "" : user.uniqueId,
        date: "",
        time: "",
    });


    if (!isOpen) return null

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCreateApptDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const createType = () => {
        if (user.role == 'counsellor') {
            return (
                <div style={{ display: 'flex', fontSize: '1.4rem' }}>
                    <div style={{ flex: 1, textAlign: 'right', paddingRight: '1rem' }}>
                        <p>Title:</p>
                        <p>Student ID:</p>
                        <p>Date:</p>
                        <p>Time:</p>
                    </div>
                    <div style={{ flex: 1 }}>
                        {/* <p>Feeling Lost</p> */}
                        <input type="text" name="title" placeholder='Title' onChange={handleChange} style={{ fontSize: '1.4rem' }}></input>
                        <input type="text" name="clientId" placeholder='Student ID' onChange={handleChange} style={{ fontSize: '1.4rem' }}></input>
                        <input type="text" name="date" placeholder='Date' onChange={handleChange} style={{ fontSize: '1.4rem' }}></input>
                        <input type="text" name="time" placeholder='Time' onChange={handleChange} style={{ fontSize: '1.4rem' }}></input>
                    </div>
                </div>
            )
        } else {
            return (
                <div style={{ display: 'flex', fontSize: '1.4rem' }}>
                    <div style={{ flex: 1, textAlign: 'right', paddingRight: '1rem' }}>
                        <p>Title:</p>
                        <p>Counsellor ID:</p>
                        <p>Date:</p>
                        <p>Time:</p>
                    </div>
                    <div style={{ flex: 1 }}>
                        {/* <p>Feeling Lost</p> */}
                        <input type="text" name="title" placeholder='Title' onChange={handleChange} style={{ fontSize: '1.4rem' }}></input>
                        <input type="text" name="counsellorId" placeholder='Counsellor ID' onChange={handleChange} style={{ fontSize: '1.4rem' }}></input>
                        <input type="text" name="date" placeholder='Date' onChange={handleChange} style={{ fontSize: '1.4rem' }}></input>
                        <input type="text" name="time" placeholder='Time' onChange={handleChange} style={{ fontSize: '1.4rem' }}></input>
                    </div>
                </div>
            )
        }
    }

    return (
        <div>
            <div style={{ backgroundColor: 'beige', marginTop: '1rem', padding: '1rem' }}>
                {createType()}
            </div>
            <div className="actions">
                <button className="toggle-button" onClick={() => { createUser(); onClose(); }}>
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

export default AppointmentCreate