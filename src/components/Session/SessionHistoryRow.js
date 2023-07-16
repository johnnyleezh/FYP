import React, { useState } from 'react';
import SessionSummaryModal from '../Session/SessionSummaryModal'

function SessionHistoryRow({ detail, isCounsellor }) {

    const [show, setShow] = useState(false);

    const showModal = (e) => {
        setShow(!show);
    };
    if (isCounsellor) {
        return (
            <div class="sessionRowContainer">
                <div className='sessionHistoryContent' onClick={(e) => { showModal(e); }}>
                    <div className="sessionHistoryColumn" style={{ flex: 1 }}>
                        <p className="data">{detail.date}</p>
                    </div>
                    <div className="sessionHistoryColumn" style={{ flex: 1 }}>
                        <p className="data">{detail.studentId}</p>
                    </div>
                    <div className="sessionHistoryColumn" style={{ flex: 1 }}>
                        <p className="data">{detail.name}</p>
                    </div>
                    <div className="sessionHistoryColumn" style={{ flex: 2 }}>
                        <p className="data">{detail.title}</p>
                    </div>
                </div>
                <SessionSummaryModal onClose={showModal} show={show}
                    date={detail.date}
                    counsellor={detail.counsellor}
                    title={detail.title}
                    description={detail.description}
                />
            </div>
        )
    }
    else {
        return (
            <div class="sessionRowContainer">
                <div className='sessionHistoryContent' onClick={(e) => { showModal(e); }}>
                    <div className="sessionHistoryColumn" style={{ flex: 1 }}>
                        <p className="data">{detail.date}</p>
                    </div>
                    <div className="sessionHistoryColumn" style={{ flex: 3 }}>
                        <p className="data">{detail.title}</p>
                    </div>
                    <div className="sessionHistoryColumn" style={{ flex: 1 }}>
                        <p className="data">{detail.score}</p>
                    </div>
                </div>
                <SessionSummaryModal onClose={showModal} show={show}
                    date={detail.date}
                    counsellor={detail.counsellor}
                    title={detail.title}
                    description={detail.description}
                />
            </div>
        )
    }
}

export default SessionHistoryRow