import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Row from '../Monitor/MonitorRow';
import '../Session/SessionHistory.css'
import Detail from './AppointmentDetail';
import Edit from './AppointmentEdit';
import Record from './AppointmentRecord';
import Create from './AppointmentCreate';
import { readData, readSpecificData } from '../CRUD/CRUD';

function AppointmentPopUpModal({ isOpen, onClose, user, detail, createOpen, studentDetail }) {

    const [detailOpen, setDetailOpen] = useState(true)
    const [editOpen, setEditOpen] = useState(false)
    const [recordOpen, setRecordOpen] = useState(false)
    const [counsellor, setCounsellor] = useState([])

    const fetchCounsellor = async () => {
        const fetchData = await readSpecificData("User", detail.counsellorId);
        setCounsellor(fetchData)
    };

    const MODAL_STYLES = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#FFF',
        // padding: '2rem',
        height: '87%',
        zIndex: 1000,
        width: '90%',
        margin: '1rem',
        overflowY: 'auto'
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
        backgroundColor: 'rgba(0, 0, 0, .7)',
        zIndex: 1000,
    }

    if (!isOpen) {
        document.getElementById('mainBody').style.overflow = 'auto'
        return null
    }
    else if (!createOpen) {
        document.getElementById('mainBody').style.overflow = 'hidden'
        fetchCounsellor()
        return ReactDOM.createPortal(
            <>
                <div style={OVERLAY_STYLES}>
                    <div style={MODAL_STYLES}>
                        <div style={{ padding: '1rem' }}>
                            <Row
                                isOpen={isOpen}
                                detail={studentDetail}
                            ></Row>
                            <Detail
                                isOpen={detailOpen}
                                onEdit={() => { setDetailOpen(false); setEditOpen(true) }}
                                onRecord={() => { setDetailOpen(false); setRecordOpen(true) }}
                                onClose={onClose}
                                detail={detail}
                                counsellor={counsellor}
                            />
                            <Edit isOpen={editOpen} onClose={() => { setEditOpen(false); setDetailOpen(true) }}
                                detail={detail}
                                counsellor={counsellor}
                            />
                            <Record isOpen={recordOpen} onClose={() => { setRecordOpen(false); setDetailOpen(true) }}
                                detail={detail}
                            />
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
                        <div style={{ padding: '1rem' }}>
                            <Create isOpen={createOpen} onClose={onClose} user={user}></Create>
                        </div>
                    </div>
                </div>
            </>,
            document.getElementById('AppointmentPopUpModal')
        )
    }

}

export default AppointmentPopUpModal