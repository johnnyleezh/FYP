import React, { useState } from 'react';
import '../Session/SessionHistory.css'
import SessionHistoryRow from '../Session/SessionHistoryRow'


function SessionHistory({ sessionDetail, role }) {

    const detailRowDisplay = () => {
        const sessionRows = []; // Array to accumulate the SessionHistoryRow components

        for (let i = 0; i < sessionDetail.length; i++) {
            sessionRows.push(
                <SessionHistoryRow
                    detail={sessionDetail[i]}
                    role={role}
                />
            );
        }

        return sessionRows; // Return the array of components
    };

    if (role == "counsellor") {
        return (
            <div className='contentContainer'>
                <div className="sessionHistoryContainer">
                    <div className="sessionHistoryHeader">
                        <div className="sessionHistoryColumn" style={{ flex: 1 }}>
                            <p className="header">Date</p>
                        </div>
                        <div className="sessionHistoryColumn" style={{ flex: 1 }}>
                            <p className="header">Student ID</p>
                        </div>
                        <div className="sessionHistoryColumn" style={{ flex: 1 }}>
                            <p className="header">Name</p>
                        </div>
                        <div className="sessionHistoryColumn" style={{ flex: 2 }}>
                            <p className="header">Title</p>
                        </div>
                    </div>
                    {detailRowDisplay()}
                </div>
            </div>

        )
    }
    else {
        return (
            <div className='contentContainer'>
                <div className="sessionHistoryContainer">
                    <div className="sessionHistoryHeader">
                        <div className="sessionHistoryColumn" style={{ flex: 1 }}>
                            <p className="header">Date</p>
                        </div>
                        <div className="sessionHistoryColumn" style={{ flex: 3 }}>
                            <p className="header">Title</p>
                        </div>
                        <div className="sessionHistoryColumn" style={{ flex: 1 }}>
                            <p className="header">Score</p>
                        </div>
                    </div>
                    {detailRowDisplay()}
                </div>
            </div>
        )
    }
}

export default SessionHistory