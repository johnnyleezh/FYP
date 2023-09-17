import React from 'react';

function AppointmentCancel({ isOpen, onClose, onCancel }) {
    const MODAL_STYLES = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#303C6C',
        padding: '0.25rem',
        zIndex: 1000,
        width: '25%',
        textAlign: 'center',
        overflowY: 'auto',
        boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.75)',
    };

    const OVERLAY_STYLES = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
    };    

    const contentStyles = {
        backgroundColor: '#FBE8A6',
        padding: '1rem',
    };

    if (!isOpen) return null;

    return (
        <div style={OVERLAY_STYLES}>
            <div style={MODAL_STYLES}>
                <div style={contentStyles}>
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
        </div>
    );
}

export default AppointmentCancel;
