import React from 'react'

function AppointmentCancel({ isOpen, onClose, onCancel }) {

    const MODAL_STYLES = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#FFF',
        padding: '1rem',
        height: '30%',
        zIndex: 1000,
        width: '25%',
        margin: '1rem',
        textAlign: 'center',
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

    if (!isOpen) return null

    return (
        <div style={OVERLAY_STYLES}>
            <div style={MODAL_STYLES}>
                Confirm to cancel appointment?
                <div className="actions">
                    <button className="toggle-button" onClick={onCancel}>
                        Yes, I confirm
                    </button>
                </div>
                <div className="cancel">
                    <button className="toggle-button" onClick={onClose}>
                        No
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AppointmentCancel