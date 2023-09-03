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
  const titleStyle = {
    padding: "0.2rem",
    flex: 1,
  };
  const detailStyle = {
    padding: "0.2rem",
    flex: 2,
    textAlign: "left",
  };

  const contentStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "row",
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
        <div
          style={{
            flex: 1,
            textAlign: "right",
            paddingRight: "1rem",
            display: "flex",
            flexDirection: "column",
            fontSize: "1.4rem",
          }}
        >
          <div style={contentStyle}>
            <p style={titleStyle}>Topic:</p>
            <div style={detailStyle}>
              <p style={{minWidth:'35rem', maxWidth:'35rem'}}>{detail.topic}</p>
            </div>
          </div>
          <div style={contentStyle}>
            <p style={titleStyle}>Counsellor:</p>
            <p style={detailStyle}>{counsellor.name}</p>
          </div>
          <div style={contentStyle}>
            <p style={titleStyle}>Date:</p>
            <p style={detailStyle}>{detail.date}</p>
          </div>
          <div style={contentStyle} className="recordTextArea">
            <textarea
              style={{ whiteSpace: "pre-wrap" }}
              id="w3review"
              name="w3review"
              rows="20"
              cols="120"
              onChange={handleChange}
            />
          </div>
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
