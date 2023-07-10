import React from 'react';


function SessionHistoryRow(props) {
    const date = props.date;
    const title = props.title;
    const score = props.score;
    return (
        <div className='sessionHistoryContent'>
            <div className="sessionHistoryColumn" style={{ flex: 1 }}>
                <p className="data">{date}</p>
            </div>
            <div className="sessionHistoryColumn" style={{ flex: 3 }}>
                <p className="data">{title}</p>
            </div>
            <div className="sessionHistoryColumn" style={{ flex: 1 }}>
                <p className="data">{score}</p>
            </div>
        </div>
    )
}

export default SessionHistoryRow