import React, { useState } from 'react';
import '../Session/SessionHistory.css'
import SessionHistoryRow from '../Session/SessionHistoryRow'


function SessionHistory({ sessionDetail, role, isProfile }) {
    // console.log("The sessionDetail is", sessionDetail)
    const detailRowDisplay = () => {
        const sessionRows = []; // Array to accumulate the SessionHistoryRow components
        if (sessionDetail.length !== 0) {
            for (let i = 0; i < sessionDetail.length; i++) {
                sessionRows.push(
                    <SessionHistoryRow
                        detail={sessionDetail[i]}
                        role={role}
                        isProfile={isProfile}
                    />
                );
            }
        }
        else {
            if (role === 'student') {
                if (isProfile) {
                    return <div style={{ fontSize: '1.5rem', textAlign: 'center', backgroundColor: '#FBE8A6' }}>You have no upcoming appointment</div>
                } else {
                    return <div style={{ fontSize: '1.5rem', textAlign: 'center', backgroundColor: '#FBE8A6' }}>No Session Recorded</div>
                }
            }
            else {
                return <div style={{ fontSize: '1.5rem', textAlign: 'center', backgroundColor: '#FBE8A6' }}>No Session Recorded</div>
            }

        }
        return sessionRows; // Return the array of components
    };
    const outerLayer = {
        backgroundColor: '#F4976C',
        width: '95%',
        boxShadow: '0px 5px 10px 0px rgba(0,0,0,0.75)',
        marginBottom: '1rem'
    }

    if (role == "counsellor") {
        if (isProfile) {
            return (
                <div>
                    <div className="sessionHistoryContainer">
                        <div className="sessionHistoryHeader">
                            <div className="sessionHistoryColumn" style={{ flex: 1 }}>
                                <p className="header">Date</p>
                            </div>
                            <div className="sessionHistoryColumn" style={{ flex: 2 }}>
                                <p className="header">Topic</p>
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
        else {
            return (
                <div style={outerLayer}>
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
                                <p className="header">Topic</p>
                            </div>
                        </div>
                        {detailRowDisplay()}
                    </div>
                </div>
            )
        }
    }
    else {//student role
        if (isProfile) {
            return (
                <div>
                    <div className="sessionHistoryContainer">
                        <div className="sessionHistoryHeader">
                            <div className="sessionHistoryColumn" style={{ flex: 1 }}>
                                <p className="header">Date</p>
                            </div>
                            <div className="sessionHistoryColumn" style={{ flex: 1 }}>
                                <p className="header">Time</p>
                            </div>
                            <div className="sessionHistoryColumn" style={{ flex: 1 }}>
                                <p className="header">Counsellor</p>
                            </div>
                            <div className="sessionHistoryColumn" style={{ flex: 2 }}>
                                <p className="header">Topic</p>
                            </div>
                            <div className="sessionHistoryColumn" style={{ flex: 1 }}>
                                <p className="header">Venue</p>
                            </div>
                            <div className="sessionHistoryColumn" style={{ flex: 1 }}>
                                <p className="header">Confirmation</p>
                            </div>
                        </div>
                        {detailRowDisplay()}
                    </div>
                </div>
            )
        }
        else {
            return (
                <div style={outerLayer}>
                    <div className="sessionHistoryContainer">
                        <div className="sessionHistoryHeader">
                            <div className="sessionHistoryColumn" style={{ flex: 1 }}>
                                <p className="header">Date</p>
                            </div>
                            <div className="sessionHistoryColumn" style={{ flex: 2 }}>
                                <p className="header">Topic</p>
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
}

export default SessionHistory