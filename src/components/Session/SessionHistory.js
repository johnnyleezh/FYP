import React from 'react'
import '../Session/SessionHistory.css'
import SessionHistoryRow from '../Session/SessionHistoryRow'

function SessionHistory() {
    return (
        <div>
            <h1 className="sessionTitle">Session History</h1>
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
                <SessionHistoryRow date='04/03/2023' title='Diagnosed with depression' score='60%'/>
                <SessionHistoryRow date='04/03/2023' title='Diagnosed with depression' score='60%'/>
                <SessionHistoryRow date='04/03/2023' title='Diagnosed with depression' score='60%'/>
            </div>
        </div>
    )
}

export default SessionHistory