import React from "react";
import PropTypes from "prop-types";
import './SessionSummaryModal.css';

function SessionSummaryModal(props) {

    const date = props.date;
    const counsellor = props.counsellor;
    const title = props.title;
    const description = props.description
    const show = props.show

    const onClose = (e) => {
        props.onClose && props.onClose(e);
    };

    if (!show) {
        return null;
    }

    return (
        <div className="modal" id="modal">
            <h2>Session Summary</h2>
            <div className="content">
                <div class="sessionSummaryContainer">
                    <div className="summaryLeft">
                        <div class="summaryTitle">
                            <p>Date:</p>
                        </div>
                        <div class="summaryTitle">
                            <p>Counsellor:</p>
                        </div>
                        <div class="summaryTitle">
                            <p>Title:</p>
                        </div>
                        <div class="summaryTitle">
                            <p>Description:</p>
                        </div>
                    </div>
                    <div className="summaryMiddle">
                        <div className="summaryTextBox">
                            {date}
                        </div>
                        <div className="summaryTextBox">
                            {counsellor}
                        </div>
                        <div className="summaryTextBox">
                            {title}
                        </div>
                        <div className="summaryDescription">
                            {description}
                        </div>
                    </div>
                    <div className="summaryRight">
                        Third
                    </div>
                </div>
            </div>
            <div className="actions">
                <button className="toggle-button" onClick={onClose}>
                    Close
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