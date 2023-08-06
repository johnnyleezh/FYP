import React, { useState } from 'react'
import { updateData, deleteData } from '../CRUD/CRUD'
import TextField from '@mui/material/TextField';
import DatePicker from '../CRUD/DatePicker'
import TimePicker from '../CRUD/TimePicker'

function AppointmentEdit({ isOpen, onClose, detail, editedDetail, counsellor }) {

    const [editDetails, setEditDetails] = useState(detail)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };
    const handleDateChange = (value) => {
        setEditDetails((prevDetails) => ({
            ...prevDetails,
            date: value.format('DD/MM/YYYY'),
        }));
    };

    const handleTimeChange = (value) => {
        setEditDetails((prevDetails) => ({
            ...prevDetails,
            time: value.format('h:mm A')
        }));
    };

    const updateDetail = async () => {
        await updateData('Appointment', editDetails.uniqueId, editDetails)
    }

    const handleSubmit = () => {
        updateDetail();
        onClose();
    };


    if (!isOpen) return null

    return (
        <div>
            <div style={{ backgroundColor: 'beige', marginTop: '0.1rem', padding: '1rem' }}>
                <div style={{ display: 'flex', fontSize: '1.4rem', height: '20rem', width: '20rem', margin: 'auto' }}>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                        <div style={{ flex: 1 }}>
                            <TextField
                                fullWidth
                                value={editDetails.title}
                                placeholder='Title'
                                name="title"
                                sx={{ backgroundColor: 'white' }}
                                label={'Title'}
                                onChange={handleChange}
                            />
                        </div>
                        <div style={{ flex: 1 }}>
                            <TextField
                                disabled
                                fullWidth
                                value={counsellor.name}
                                placeholder='Title'
                                name="counsellorId"
                                sx={{ backgroundColor: 'white' }}
                                label={'Counsellor'}
                                onChange={handleChange}
                            />
                        </div>
                        <div style={{ flex: 1 }}>
                            <DatePicker
                                date={editDetails.date}
                                label="Date"
                                name="date"
                                sx={{ backgroundColor: 'white', width: '100%' }}
                                onChange={handleDateChange}
                            />
                        </div>
                        <div style={{ flex: 1 }}>
                            <TimePicker
                                time={editDetails.time}
                                sx={{ backgroundColor: 'white', width: '100%' }}
                                label={'Time'}
                                onChange={handleTimeChange}
                            />
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', width: '30rem', margin: 'auto' }}>
                    <div className="cancel" style={{ flex: 1 }}>
                        <button className="toggle-button" onClick={onClose}>
                            Cancel
                        </button>
                    </div>
                    <div className="actions" style={{ flex: 1 }}>
                        <button className="toggle-button" onClick={handleSubmit}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div >


    )
}

export default AppointmentEdit