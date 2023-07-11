import React from "react";
import PropTypes from "prop-types";
import './SessionSummaryModal.css';

function SessionSummaryModal(props) {
    const onClose = (e) => {
        props.onClose && props.onClose(e);
    };

    if (!props.show) {
        return null;
    }

    return (
        <div className="modal" id="modal">
            <h2>Modal Window</h2>
            <div className="content">{props.children}</div>
            <div className="actions">
                <button className="toggle-button" onClick={onClose}>
                    close
                </button>
            </div>
        </div>
    );
}
SessionSummaryModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
};
export default SessionSummaryModal