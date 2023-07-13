import React, { useState } from 'react';
import './AppointmentList.css';
import AppointmentPopUpModal from './AppointmentPopUpModal';

function AppointmentListRow(props) {
    const profilePic = props.profilePic
    const name = props.name;
    const studentId = props.studentId;
    const course = props.course;
    const trimester = props.trimester;
    const atttendance = props.atttendance;
    const mentalHealth = props.mentalHealth;
    // const address = "/"+props.address
    const address = props.address;
    const date = props.date;
    const time = props.time;
    const title = props.title;

    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('Hello');


    return (
        <div>
            <div className="apptListContent" onClick={()=>{setIsOpen(true)}}>
                <div className="apptColumnProfileContent">
                    <div class="rowContainer">
                        <div className="columnContainer">
                            <img src={profilePic} className="photo" alt="Student Photo" width="140em" height="180em"></img>
                        </div>
                        <div className='columnMiddleContainer'>
                            <div style={{ flex: 1.5 }}>
                                <div className="textBoxLeft">Name: </div>
                                <div className="textBoxLeft">Student ID: </div>
                                <div className="textBoxLeft">Course: </div>
                                <div className="textBoxLeft">Trimester:</div>
                            </div>
                            <div style={{ flex: 3 }}>
                                <div className="textBoxRight">{name}</div>
                                <div className="textBoxRight">{studentId}</div>
                                <div className="textBoxRight">{course}</div>
                                <div className="textBoxRight">{trimester}</div>
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
            <AppointmentPopUpModal isOpen={isOpen} message={message} onClose={()=>{setIsOpen(false)}}/>
        </div>
    )
}

export default AppointmentListRow