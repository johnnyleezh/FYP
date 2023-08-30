import React, { useState, useEffect } from "react";
import AppointmentCancel from "./AppointmentCancel";
import { deleteData } from "../CRUD/CRUD";

function AppointmentDetail({
  isOpen,
  onClose,
  onEdit,
  onRecord,
  detail,
  counsellor,
}) {
  // State to store appointment details and cancellation modal status
  const [appointmentDetails, setAppointmentDetails] = useState(detail);
  const [cancelOpen, setCancelOpen] = useState(false);

  // Update appointmentDetails when the detail prop changes
  useEffect(() => {
    setAppointmentDetails(detail);
    console.log("Obtained detail:", detail);
  }, [detail]);

  // Handle appointment cancellation
  const apptCancel = async () => {
    const result = await deleteData("Appointment", detail.uniqueId);
    if (result.success) {
      onClose();
    }
  };

  // If the modal is not open, do not render anything
  if (!isOpen) return null;

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "beige",
          marginTop: "0rem",
          padding: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            fontSize: "1.4rem",
          }}
        >
          <div style={{ flex: 1, textAlign: "right", paddingRight: "1rem" }}>
            <p>Topic:</p>
            <p>Service:</p>
            <p>Prefered Language:</p>
            <p>Counsellor:</p>
            <p>Date:</p>
            <p>Time:</p>
            <p>Venue:</p>
          </div>
          <div className="neutral">
            <button
              className="toggle-button"
              onClick={onEdit}
              style={{ position: "absolute", right: "3rem" }}
            >
              Edit details
            </button>
          </div>
          <div style={{ flex: 1 }}>
            <p>{detail.topic}</p>
            <p>{detail.service}</p>
            <p>{detail.language}</p>
            <p>{counsellor.name}</p>
            <p>{detail.date}</p>
            <p>{detail.time}</p>
            {detail.venue === "" ? <p>Waiting..</p> : <p>{detail.venue}</p>}
          </div>
        </div>
        <div
          style={{
            flex: 1,
            fontSize: "2.5rem",
            textAlign: "center",
          }}
        >
          {detail.confirmation ? (
            <p style={{ color: "#78f89f" }}>Confirmed</p>
          ) : (
            <p style={{ color: "red" }}>Not Confirmed</p>
          )}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "30rem",
            margin: "auto",
          }}
        >
          <div className="cancel" style={{ flex: 1, alignItems: "flex-start" }}>
            <button
              className="toggle-button"
              onClick={() => {
                setCancelOpen(true);
              }}
            >
              Cancel Appointment
            </button>
          </div>
          <div className="actions" style={{ flex: 1 }}>
            <button className="toggle-button" onClick={onRecord}>
              Record Session
            </button>
          </div>
        </div>

        <div
          className="neutral"
          style={{ position: "absolute", right: "3rem", bottom: "2.5rem" }}
        >
          <button className="toggle-button" onClick={onClose}>
            Return
          </button>
        </div>
      </div>

      {/* Render the AppointmentCancel component */}
      <AppointmentCancel
        isOpen={cancelOpen}
        onClose={() => {
          setCancelOpen(false);
        }}
        onCancel={apptCancel}
      />
    </div>
  );
}

export default AppointmentDetail;
