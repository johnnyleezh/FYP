import React, { useState, useEffect } from 'react';
import SessionSummaryModal from '../Session/SessionSummaryModal'
import { readSpecificData, readData } from '../CRUD/CRUD';

function SessionHistoryRow({ detail, role, isProfile }) {

    const [counsellor, setCounsellor] = useState([])
    const [mentalHealth, setMentalHealth] = useState([])
    const [client, setClient] = useState([])

    const fetchCounsellorData = async () => {
        const readCounsellor = await readSpecificData("User", detail.counsellorId);
        setCounsellor(readCounsellor)
    };

    const fetchMentalHealthData = async () => {
        const readMentalHealth = await readSpecificData("Mental Health", detail.healthId);
        setMentalHealth(readMentalHealth)
    };
    const fetchClientData = async () => {
        const readClient = await readSpecificData("User", detail.clientId);
        setClient(readClient)
    };
    useEffect(() => {
        fetchCounsellorData();
        fetchMentalHealthData();
        fetchClientData();
    }, []);
    const [show, setShow] = useState(false);
    const showModal = (e) => {
        setShow(!show);
    };

    if (role == "counsellor") {
        if (isProfile) {
            return (
                <div class="sessionRowContainer">
                    <div className='sessionHistoryContent' onClick={(e) => { showModal(e); }}>
                        <div className="sessionHistoryColumn" style={{ flex: 1 }}>
                            <p className="data">{detail.date}</p>
                        </div>
                        <div className="sessionHistoryColumn" style={{ flex: 2 }}>
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
        else {
            return (
                <div class="sessionRowContainer">
                    <div className='sessionHistoryContent' onClick={(e) => { showModal(e); }}>
                        <div className="sessionHistoryColumn" style={{ flex: 1 }}>
                            <p className="data">{detail.date}</p>
                        </div>
                        <div className="sessionHistoryColumn" style={{ flex: 1 }}>
                            <p className="data">{client.userId}</p>
                        </div>
                        <div className="sessionHistoryColumn" style={{ flex: 1 }}>
                            <p className="data">{client.name}</p>
                        </div>
                        <div className="sessionHistoryColumn" style={{ flex: 2 }}>
                            <p className="data">{detail.title}</p>
                        </div>

                    </div>
                    <SessionSummaryModal onClose={showModal} show={show}
                        date={detail.date}
                        counsellor={counsellor.name}
                        title={detail.title}
                        description={detail.summaryText}
                    />
                </div>
            )
        }
    }
    else {//Student role
        if (isProfile) {
            return (
                <div class="sessionRowContainer">
                    <div className='sessionHistoryContent'>
                        <div className="sessionHistoryColumn" style={{ flex: 1 }}>
                            <p className="data">{detail.date}</p>
                        </div>
                        <div className="sessionHistoryColumn" style={{ flex: 1 }}>
                            <p className="data">{detail.time}</p>
                        </div>
                        <div className="sessionHistoryColumn" style={{ flex: 1 }}>
                            <p className="data">{counsellor.name}</p>
                        </div>
                        <div className="sessionHistoryColumn" style={{ flex: 2 }}>
                            <p className="data">{detail.title}</p>
                        </div>
                        <div className="sessionHistoryColumn" style={{ flex: 1 }}>
                            <p className="data">{detail.venue}</p>
                        </div>
                    </div>
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
                        <div className="sessionHistoryColumn" style={{ flex: 2 }}>
                            <p className="data">{detail.title}</p>
                        </div>
                        <div className="sessionHistoryColumn" style={{ flex: 1 }}>
                            <p className="data">{mentalHealth.score}%</p>
                        </div>
                    </div>
                    <SessionSummaryModal onClose={showModal} show={show}
                        date={detail.date}
                        counsellor={counsellor.name}
                        title={detail.title}
                        description={detail.summaryText}
                    />
                </div>
            )
        }
    }
}

export default SessionHistoryRow