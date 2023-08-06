import React, { useState, useEffect } from 'react';
import { createData, readData, readSpecificData, readTableData } from '../CRUD/CRUD';
import SearchBar from '../CRUD/SearchBar';
import TextField from '@mui/material/TextField';
import DatePicker from '../CRUD/DatePicker'
import TimePicker from '../CRUD/TimePicker';
import format from 'date-fns/format';

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
    const [counsellorList, setCounsellorList] = useState([]);
    const [selectStudent, setSelectStudent] = useState([]);
    const [selectedProfile, setSelectedProfile] = useState([])

    const obtainStudentList = async () => {
        const list = await readData('User', 'role', 'student')
        if (list) {
            setStudentList(list)
        }
    }

    const obtainCounsellorList = async () => {
        const list = await readData('User', 'role', 'counsellor')
        if (list) {
            setCounsellorList(list)
        }
    }

    const fetchUsers = async () => {
        const data = await readTableData('User');
        setSelectStudent(data);
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCreateApptDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
        console.log(createApptDetails)
    };
    const handleDateChange = (value) => {
        setCreateApptDetails((prevDetails) => ({
            ...prevDetails,
            date: value.format('DD/MM/YYYY'),
        }));
    };
    const handleTimeChange = (value) => {
        setCreateApptDetails((prevDetails) => ({
            ...prevDetails,
            time: value.format('h:mm A')
        }));
    };

    const obtainedProfile = (value) => {
        setSelectedProfile(value);
        if (value) {
            if (user.role == 'counsellor')
                setCreateApptDetails((prevDetails) => ({
                    ...prevDetails,
                    clientId: value.uniqueId,
                }));
            else {
                setCreateApptDetails((prevDetails) => ({
                    ...prevDetails,
                    counsellorId: value.uniqueId,
                }));
            }
        }
    };

    useEffect(() => {
        fetchUsers();
        obtainStudentList();
        obtainCounsellorList();
    }, []);

    useEffect(() => {
        if (user.role == 'counsellor') {
            const selectedStudent = selectStudent.find((student) => student.userId === createApptDetails.clientId);
            if (selectedStudent) {
                setCreateApptDetails((prevDetails) => ({
                    ...prevDetails,
                    clientId: selectedStudent.uniqueId,
                }));
            }
        } else {
            const selectedStudent = selectStudent.find((student) => student.userId === createApptDetails.counsellorId);
            if (selectedStudent) {
                setCreateApptDetails((prevDetails) => ({
                    ...prevDetails,
                    counsellorId: selectedStudent.uniqueId,
                }));
            }
        }
    }, [user.role == 'counsellor' ? createApptDetails.clientId : createApptDetails.counsellorId, selectStudent]);

    const createUser = async () => {
        if (createApptDetails.clientId && createApptDetails.counsellorId) {
            createData('Appointment', createApptDetails);
            onClose();
        }
    };

    if (!isOpen) return null;


    return (
        <div style={{ backgroundColor: 'beige', padding: '2.5rem', height: '100%' }}>
            <div style={{ margin: '1rem' }}>
                <h1 style={{ textDecoration: 'underline' }}>Create Appointment</h1>
            </div>
            <div style={{ padding: '1rem', height: '20rem', display: 'flex', fontSize: '1.4rem' }}>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ flex: 1 }}>
                        <TextField
                            fullWidth
                            placeholder='Title'
                            name="title"
                            sx={{ backgroundColor: 'white' }}
                            label={'Title'}
                            onChange={handleChange}
                        />
                    </div>
                    <div style={{ flex: 1 }}>
                        <SearchBar
                            sx={{ width: '100%', backgroundColor: 'white' }}
                            label={user.role === 'counsellor' ? 'Student ID/Name' : 'Counsellor ID/Name'}
                            user={user}
                            data={user.role === 'counsellor' ? studentList : counsellorList}
                            selectedProfile={(e) => obtainedProfile(e)}
                        />
                    </div>
                    <div style={{ flex: 1 }}>
                        <DatePicker
                            label="Date"
                            sx={{ backgroundColor: 'white', width: '100%' }}
                            onChange={handleDateChange}
                        />
                    </div>
                    <div style={{ flex: 1 }}>
                        <TimePicker
                            sx={{ backgroundColor: 'white', width: '100%' }}
                            label={'Time'}
                            onChange={handleTimeChange}
                        />
                    </div>
                </div>
            </div >
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div className="cancel" style={{ flex: 1 }}>
                    <button className="toggle-button" onClick={onClose}>
                        Cancel
                    </button>
                </div>
                <div className="actions" style={{ flex: 1 }}>
                    <button className="toggle-button" onClick={() => { createUser(); }}>
                        Submit
                    </button>
                </div>

            </div>
        </div >
    );
}

export default AppointmentCreate;
