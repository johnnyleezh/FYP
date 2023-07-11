import React, { useState } from 'react';
import SessionSummaryModal from '../Session/SessionSummaryModal'

function SessionHistoryRow(props) {
    const date = props.date;
    const title = props.title;
    const score = props.score;
    const counsellor = props.counsellor;
    const description = props.description;


    const [show, setShow] = useState(false);

    const showModal = (e) => {
        setShow(!show);
    };
    return (
        <div class="sessionRowContainer">
            <div className='sessionHistoryContent' onClick={(e) => { showModal(e); }}>
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
            <SessionSummaryModal onClose={showModal} show={show} 
                date={date}
                counsellor={counsellor}
                title={title}
                description={description}
                />
        </div>
    )
}

export default SessionHistoryRow