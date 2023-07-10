import React from 'react'
import './MonitorRow.css'
import { Link } from 'react-router-dom';

const MonitorRow = (props) => {
    const profilePic = props.profilePic
    const name = props.name;
    const studentId = props.studentId;
    const course = props.course;
    const trimester = props.trimester;
    const atttendance = props.atttendance;
    const mentalHealth = props.mentalHealth
    // const address = "/"+props.address
    const address = '/profile'

    return (
        <div>
            <Link to={address} className="link" style={{textDecoration:'none'}}>
                <div class="rowContainer">
                    <div className="columnContainer">
                        <img src={profilePic} className="photo" alt="Student Photo" width="140em" height="180em"></img>
                    </div>
                    <div className='columnMiddleContainer'>
                        <div style={{ flex: 1 }}>
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
                    <div className="columnContainer">
                        <p className="score">{atttendance}%</p>
                        <p>Average</p>
                        <p>Attendance Score</p>
                    </div>
                    <div className="columnContainer">
                        <p className="score">{mentalHealth}%</p>
                        <p>Mental Health Score</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default MonitorRow