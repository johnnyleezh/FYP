import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Row from '../Monitor/MonitorRow';
// import '../Session/SessionHistory.css'
import Detail from './AppointmentDetail';
import Edit from './AppointmentEdit';
import Record from './AppointmentRecord';
import Create from './AppointmentCreate';
import { readData, readSpecificData } from '../CRUD/CRUD';
import { LatestScore } from '../CRUD/ReadScore';

function AppointmentPopUpModal({ isOpen, onClose, user, detail, createOpen, studentDetail }) {

    const [detailOpen, setDetailOpen] = useState(true)
    const [editOpen, setEditOpen] = useState(false)
    const [recordOpen, setRecordOpen] = useState(false)
    const [counsellor, setCounsellor] = useState([])
    const [appointmentDetail, setAppointmentDetail] = useState(detail)
    const [mentalHealth, setMentalHealth] = useState([])
    const fetchCounsellor = async () => {
        const data = await readSpecificData('User', detail.counsellorId);
        setCounsellor(data);
    };

    useEffect(() => {
        if (detail) {
            fetchCounsellor();
            // fetchMentalHealth();
        }
    }, []);

    const fetchData = async () => {
        const data = await readSpecificData("Appointment", detail.uniqueId)
        setAppointmentDetail(data)
    }
    useEffect(() => {
        if (detail) { fetchData() }
    }, [detail]);
    const MODAL_STYLES = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#303C6C',
        padding: '0.5rem',
        maxHeight: '95%',
        zIndex: 1000,
        maxWidth: '95%',
        overflowY: 'auto',
        boxShadow: '0px 5px 10px 0px rgba(0,0,0,0.75)',
        display: 'flex',
        flexDirection: 'column',
    }

    const OVERLAY_STYLES = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, .3)',
        zIndex: 1000,
    }
    if (!isOpen) {
        document.getElementById('mainBody').style.overflow = 'auto'
        return null
    }
    else if (!createOpen) {
        document.getElementById('mainBody').style.overflow = 'hidden'
        return ReactDOM.createPortal(
            <>
                <div style={OVERLAY_STYLES}>
                    <div style={MODAL_STYLES}>
                        <div style={{ backgroundColor: "#FBE8A6", padding: '1rem', width: '70rem' }}>
                            <div style={{ padding: '0.1rem' }}>
                                <Row
                                    isOpen={isOpen}
                                    detail={studentDetail}
                                    mental={(e) => { setMentalHealth(e) }}
                                ></Row>
                                <Detail
                                    isOpen={detailOpen}
                                    onEdit={() => { setDetailOpen(false); setEditOpen(true) }}
                                    onRecord={() => { setDetailOpen(false); setRecordOpen(true) }}
                                    onClose={onClose} // Pass the onClose prop here to the Detail component
                                    detail={appointmentDetail}
                                    counsellor={counsellor}
                                />
                                <Edit isOpen={editOpen} onClose={() => { fetchData(); setEditOpen(false); setDetailOpen(true); }}
                                    detail={appointmentDetail}
                                    counsellor={counsellor}
                                />
                                <Record isOpen={recordOpen} onClose={() => { onClose() }}
                                    onCloseRecord={() => { setRecordOpen(false); setDetailOpen(true); }} detail={appointmentDetail} counsellor={counsellor} mentalHealth={mentalHealth}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </>,
            document.getElementById('AppointmentPopUpModal')
        )
    }
    else {
        document.getElementById('mainBody').style.overflow = 'hidden'
        return ReactDOM.createPortal(
            <>
                <div style={OVERLAY_STYLES}>
                    <div style={MODAL_STYLES}>
                        <Create isOpen={createOpen} onClose={onClose} user={user}></Create>
                    </div>
                </div>
            </>,
            document.getElementById('AppointmentPopUpModal')
        )
    }

}

export default AppointmentPopUpModal