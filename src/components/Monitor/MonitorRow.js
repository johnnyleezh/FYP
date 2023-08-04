import React, { useState } from 'react'
import './MonitorRow.css'
import { Link } from 'react-router-dom';
import { LatestScore } from '../CRUD/ReadScore';
import { useEffect } from 'react';
import StudentProfile from '../Profile/StudentProfile';

const MonitorRow = ({ isOpen, detail, mental }) => {
    const dataToPass = {
        detail: detail,
    };
    const displayScore = () => {
        const data = LatestScore(detail.uniqueId)
        if (data) {
            mental(data)
            return (
                <div className="columnContainer">
                    <p className="score">{data.score}%</p>
                    <p>Mental Health Score</p>
                    <div style={{ marginTop: 40, display: 'flex' }}>
                        <div style={{ flex: 1, textAlign: 'right' }}>
                            <p>Last Tested:</p>
                        </div>
                        <div style={{ flex: 1, textAlign: 'left', marginLeft: 5 }}>
                            {data.date}
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return <div className="columnContainer">
                <p className="message">Please start your mental health test</p>

            </div>
        }
    }
    if (!isOpen) {
        return null
    }
    return (
        <div>
            <Link style={{ textDecoration: "none", color: "inherit" }}
                to={{
                    pathname: '/profile',
                    search: `?uniqueId=${detail.uniqueId}`
                }}
                onDragStart={(e) => { e.preventDefault(); }}
            >
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
                        </div>
                        <div style={{ flex: 3 }}>
                            <div className="textBoxRight">{detail.name}</div>
                            <div className="textBoxRight">{detail.userId}</div>
                            <div className="textBoxRight">{detail.course}</div>
                            <div className="textBoxRight">{detail.trimester}</div>
                        </div>
                    </div>
                    <div className="columnContainer">
                        <p className="score">{detail.attendance}%</p>
                        <p>Average</p>
                        <p>Attendance Score</p>
                    </div>
                    {displayScore()}
                </div>
            </Link>
        </div>
    )
}

export default MonitorRow