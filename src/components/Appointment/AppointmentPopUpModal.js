import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Row from '../Monitor/MonitorRow';
import '../Session/SessionHistory.css'
import AppointmentDetail from './AppointmentDetail';
import AppointmentEdit from './AppointmentEdit'

function AppointmentPopUpModal({ isOpen, onClose }) {

    const [detailOpen, setDetailOpen] = useState(true)
    const [editOpen, setEditOpen] = useState(false)

    const MODAL_STYLES = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#FFF',
        padding: '2rem',
        zIndex: 1000,
        width: '90%'
    }

    const OVERLAY_STYLES = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, .7)',
        zIndex: 1000
    }

    if (!isOpen) return null

    return ReactDOM.createPortal(
        <>
            <div style={OVERLAY_STYLES}>
                <div style={MODAL_STYLES}>
                    <Row
                        profilePic='/images/jingyuan.webp'
                        name='Johnny'
                        studentId='1800795'
                        course='Software Engineering'
                        trimester='Y5S2'
                        atttendance='83'
                        mentalHealth='63'
                        address='/profile'
                        appt='01/02/2023'
                        lastTested='02/03/2022'
                    ></Row>

                    <AppointmentDetail isOpen={detailOpen} onEdit={()=>{setDetailOpen(false); setEditOpen(true)}} onClose={onClose}/>

                    <AppointmentEdit isOpen={editOpen} onClose={() => { setEditOpen(false); setDetailOpen(true) }} />

                </div>
            </div>
        </>,
        document.getElementById('AppointmentPopUpModal')
    )
}

export default AppointmentPopUpModal