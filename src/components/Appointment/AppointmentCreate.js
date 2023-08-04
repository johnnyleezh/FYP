import React, { useState, useEffect } from 'react';
import { createData, readTableData } from '../CRUD/CRUD';

function AppointmentCreate({ isOpen, onClose, user }) {
    const [createApptDetails, setCreateApptDetails] = useState({
        clientId: user.role === 'student' ? user.uniqueId : '',
        title: '',
        counsellorId: user.role === 'student' ? '' : user.uniqueId,
        date: '',
        time: '',
        venue: '',
    });
    const [studentList, setStudentList] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCreateApptDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
        console.log(createApptDetails)
    };

    useEffect(() => {
        const fetchData = async () => {
            const data = await readTableData('User');
            setStudentList(data);
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (user.role == 'counsellor') {
            const selectedStudent = studentList.find((student) => student.userId === createApptDetails.clientId);
            console.log("This is the selected user.", selectedStudent);
            if (selectedStudent) {
                setCreateApptDetails((prevDetails) => ({
                    ...prevDetails,
                    clientId: selectedStudent.uniqueId,
                }));
            }
        } else {
            const selectedStudent = studentList.find((student) => student.userId === createApptDetails.counsellorId);
            console.log("This is the selected user.", selectedStudent);
            if (selectedStudent) {
                setCreateApptDetails((prevDetails) => ({
                    ...prevDetails,
                    counsellorId: selectedStudent.uniqueId,
                }));
            }
        }
    }, [user.role == 'counsellor' ? createApptDetails.clientId : createApptDetails.counsellorId, studentList]);

    const createUser = async () => {
        createData('Appointment', createApptDetails);
    };

    if (!isOpen) return null;


    return (
        <div>
            <div style={{ backgroundColor: 'beige', marginTop: '1rem', padding: '1rem' }}>
                <div style={{ display: 'flex', fontSize: '1.4rem' }}>
                    <div style={{ flex: 1, textAlign: 'right', paddingRight: '1rem' }}>
                        <p>Title:</p>
                        {user.role === 'counsellor' ? <p>Student ID:</p> : <p>Counsellor ID:</p>}
                        <p>Date:</p>
                        <p>Time:</p>
                    </div>
                    <div style={{ flex: 1 }}>
                        <input type="text" name="title" placeholder="Title" onChange={handleChange} style={{ fontSize: '1.4rem' }} />
                        <input
                            type="text"
                            name={user.role === 'counsellor' ? 'clientId' : 'counsellorId'}
                            placeholder={user.role === 'counsellor' ? 'Student ID' : 'Counsellor ID'}
                            onChange={handleChange}
                            style={{ fontSize: '1.4rem' }}
                        />
                        <input type="text" name="date" placeholder="Date" onChange={handleChange} style={{ fontSize: '1.4rem' }} />
                        <input type="text" name="time" placeholder="Time" onChange={handleChange} style={{ fontSize: '1.4rem' }} />
                    </div>
                </div>
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
    );
}

export default AppointmentCreate;
