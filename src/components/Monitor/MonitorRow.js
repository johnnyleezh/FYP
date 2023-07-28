import React, { useState } from 'react'
import './MonitorRow.css'
import { Link } from 'react-router-dom';

const MonitorRow = ({ isOpen, detail }) => {

    if (!isOpen) {
        return null
    }
    return (
        <div>
            <div class="rowContainer">
                <div className="columnContainer">
                    <img src={detail.picture} className="photo" alt="Student Photo" width="140em" height="180em"></img>
                </div>
                <div className='columnMiddleContainer'>
                    <div style={{ flex: 1.5 }}>
                        <div className="textBoxLeft">Name: </div>
                        <div className="textBoxLeft">Student ID: </div>
                        <div className="textBoxLeft">Course: </div>
                        <div className="textBoxLeft">Trimester:</div>
                        <div className="textBoxLeft">Next Appointment:</div>
                    </div>
                    <div style={{ flex: 3 }}>
                        <div className="textBoxRight">{detail.name}</div>
                        <div className="textBoxRight">{detail.userId}</div>
                        <div className="textBoxRight">{detail.course}</div>
                        <div className="textBoxRight">{detail.trimester}</div>
                        <div className="textBoxRight">{detail.appointment}</div>
                    </div>
                </div>
                <div className="columnContainer">
                    <p className="score">{detail.attendance}%</p>
                    <p>Average</p>
                    <p>Attendance Score</p>
                </div>
                <div className="columnContainer">
                    <p className="score">{detail.mentalHealth}%</p>
                    <p>Mental Health Score</p>
                    <div style={{ marginTop: 40, display: 'flex' }}>
                        <div style={{ flex: 1, textAlign: 'right' }}>
                            <p>Last Tested:</p>
                        </div>
                        <div style={{ flex: 1, textAlign: 'left', marginLeft: 5 }}>
                            {detail.lastTested}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MonitorRow