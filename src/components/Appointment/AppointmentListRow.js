import React, { useState, useEffect } from 'react';
import './AppointmentList.css';
import AppointmentPopUpModal from './AppointmentPopUpModal';
import { readSpecificData } from '../CRUD/CRUD';

function AppointmentListRow({ detail, openProfile, onClose }) {
    const [client, setClient] = useState([])
    const fetchData = async () => {
        const fetchData = await readSpecificData("User", detail.clientId);
        setClient(fetchData)
    };
    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        fetchData();
    }, [detail]);

    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('Hello');

    return (
        <div>
            <div className="apptListContent" onClick={() => { setIsOpen(openProfile) }}>
                <div className="apptColumnProfileContent">
                    <div class="rowContainer">
                        <div className="columnContainer">
                            <img src={client.picture} className="photo" alt="Student Photo" width="140em" height="180em"></img>
                        </div>
                        <div className='columnMiddleContainer'>
                            <div style={{ flex: '1.5', display: 'flex', flexDirection: 'column' }}>
                                <div className="textBoxLeft">Name: </div>
                                <div className="textBoxLeft">Student ID: </div>
                                <div className="textBoxLeft">Course: </div>
                                <div className="textBoxLeft">Trimester:</div>
                                <div className="textBoxLeft">CGPA:</div>
                            </div>
                            <div style={{ flex: '3', display: 'flex', flexDirection: 'column' }}>
                                <div className="textBoxRight">{client.name}</div>
                                <div className="textBoxRight">{client.userId}</div>
                                <div className="textBoxRight">{client.course}</div>
                                <div className="textBoxRight">{client.trimester}</div>
                                <div className="textBoxRight">{client.CGPA}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="apptColumnDateContent">
                    <div style={{ marginTop: '6rem' }}>
                        <p>{detail.date}</p>
                        <p>{detail.time}</p>
                    </div>
                </div>
                <div className="apptColumnTitleContent">
                    <div style={{ marginTop: '6rem' }}>{detail.title}</div>
                </div>
            </div>
            <AppointmentPopUpModal
                isOpen={isOpen}
                createOpen={!isOpen}
                onClose={() => {fetchData(); setIsOpen(false); onClose();  }}
                studentDetail={client}
                detail={detail}
            />
        </div>
    )
}

export default AppointmentListRow