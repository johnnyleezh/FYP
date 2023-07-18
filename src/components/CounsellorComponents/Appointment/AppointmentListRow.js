import React, { useState } from 'react';
import './AppointmentList.css';
import AppointmentPopUpModal from './AppointmentPopUpModal';

function AppointmentListRow({ detail, date, time, title }) {

    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('Hello');

    return (
        <div>
            <div className="apptListContent" onClick={() => { setIsOpen(true) }}>
                <div className="apptColumnProfileContent">
                    <div class="rowContainer">
                        <div className="columnContainer">
                            <img src={detail.profilePic} className="photo" alt="Student Photo" width="140em" height="180em"></img>
                        </div>
                        <div className='columnMiddleContainer'>
                            <div style={{ flex: 1.5 }}>
                                <div className="textBoxLeft">Name: </div>
                                <div className="textBoxLeft">Student ID: </div>
                                <div className="textBoxLeft">Course: </div>
                                <div className="textBoxLeft">Trimester:</div>
                            </div>
                            <div style={{ flex: 3 }}>
                                <div className="textBoxRight">{detail.name}</div>
                                <div className="textBoxRight">{detail.studentId}</div>
                                <div className="textBoxRight">{detail.course}</div>
                                <div className="textBoxRight">{detail.trimester}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="apptColumnDateContent">
                    <div style={{ marginTop: '6rem' }}>
                        <p>{date}</p>
                        <p>{time}</p>
                    </div>
                </div>
                <div className="apptColumnTitleContent">
                    <div style={{ marginTop: '6rem' }}>{title}</div>
                </div>
            </div>
            <AppointmentPopUpModal
                isOpen={isOpen}
                createOpen={!isOpen}
                message={message}
                onClose={() => { setIsOpen(false) }}
                date='02/03/2023'
                time='10:30AM'
                counsellor='Dr. Yao Chin Kuok'
                title='Feeling lost'
                studentDetail={detail}
            />
        </div>
    )
}

export default AppointmentListRow