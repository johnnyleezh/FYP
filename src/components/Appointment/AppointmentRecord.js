import React, { useState, useEffect } from "react";
import { createData, deleteData } from "../CRUD/CRUD";

function AppointmentRecord({
  isOpen,
  onClose,
  onCloseRecord,
  detail,
  counsellor,
  mentalHealth,
}) {
  // Initialize state for record details
  const [recordDetails, setRecordDetails] = useState({
    ...detail, // Spread all properties from detail
    healthId: mentalHealth.uniqueId ? mentalHealth.uniqueId : "", // ID of the mental health record, if available
    summaryText: "", // Initialize summary text as empty
  });

  // Update recordDetails when detail or mentalHealth changes
  useEffect(() => {
    setRecordDetails({
      ...detail, // Spread all properties from detail
      healthId: mentalHealth.uniqueId ? mentalHealth.uniqueId : "",
      summaryText: recordDetails.summaryText, // Preserve existing summaryText
    });
  }, [detail, mentalHealth]);

  // Handle changes in the textarea
  const handleChange = (e) => {
    setRecordDetails({
      ...recordDetails,
      summaryText: e.target.value,
    });
    console.log(recordDetails);
  };

  // Create session and delete appointment data
  const createSession = () => {
    createData("Session", recordDetails);
    deleteData("Appointment", detail.uniqueId);
    onClose();
  };

  // Return null if not open
  if (!isOpen) return null;

  return (
    <div>
      <div
        style={{
          backgroundColor: "beige",
          marginTop: "0.1rem",
          padding: "1rem",
        }}
      >
        <div style={{ display: "flex", fontSize: "1.4rem" }}>
          <div style={{ flex: 1, textAlign: "right", paddingRight: "1rem" }}>
            <p>Topic:</p>
            <p>Counsellor:</p>
            <p>Date:</p>
          </div>
          <div style={{ flex: 1 }}>
            <p>{detail.topic}</p>
            <p>{counsellor.name}</p>
            <p>{detail.date}</p>
          </div>
        </div>
        {/* Textarea for recording session details */}
        <div className="recordTextArea">
          <textarea
            style={{ whiteSpace: "pre-wrap" }}
            id="w3review"
            name="w3review"
            rows="20"
            cols="120"
            onChange={handleChange}
          />
        </div>

        {/* Submit and Cancel buttons */}
        <div className="actions">
          <button className="toggle-button" onClick={createSession}>
            Submit
          </button>
        </div>
        <div className="cancel">
          <button className="toggle-button" onClick={onCloseRecord}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppointmentRecord;
