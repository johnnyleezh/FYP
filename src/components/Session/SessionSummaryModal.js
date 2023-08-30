import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import './SessionSummaryModal.css';
import { readSpecificData } from "../CRUD/CRUD";

function SessionSummaryModal({ detail, counsellor, mentalHealth, onClose, show }) {

    const [score, setScore] = useState([])

    if (!show) {
        return null;
    }

    const fetchScore = async () => {
        const fetchData = await readSpecificData("Mental Health", detail.healthId);
        setScore(fetchData)
    }

    return (
        <div className="modal">
            <div style={{textAlign:'center'}}>
                <h1>Session Summary</h1>
            </div>
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
                            <p>Topic:</p>
                        </div>
                        <div class="summaryTitle">
                            <p>Description:</p>
                        </div>
                    </div>
                    <div className="summaryMiddle">
                        <div className="summaryTextBox">
                            {detail.date}
                        </div>
                        <div className="summaryTextBox">
                            {counsellor.name}
                        </div>
                        <div className="summaryTextBox">
                            {detail.topic}
                        </div>
                        <div className="summaryDescription" style={{ whiteSpace: "pre-wrap" }}>
                            {detail.summaryText}
                        </div>
                    </div>
                    <div className="summaryRight">
                        <p>Mental Health Score</p>
                        <p style={{fontSize:"4rem"}}>{mentalHealth.score ? mentalHealth.score : 0}%</p>
                        <p>{mentalHealth.date ? "Recorded on: "+ mentalHealth.date : "Record not found"}</p>
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