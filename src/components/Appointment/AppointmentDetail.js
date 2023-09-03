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

  const titleStyle = {
    padding: "0.2rem",
    flex: 1,
  };
  const detailStyle = {
    padding: "0.2rem",
    flex: 1,
    textAlign: "left",
  };

  const contentStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "row",
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
          <div
            style={{
              flex: 1,
              textAlign: "right",
              paddingRight: "1rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={contentStyle}>
              <p style={titleStyle}>Topic:</p>
              <div style={detailStyle}>
                <p style={{ maxWidth: "20rem" }}>{detail.topic}</p>
              </div>
            </div>
            <div style={contentStyle}>
              <p style={titleStyle}>Service:</p>
              <p style={detailStyle}>{detail.service}</p>
            </div>
            <div style={contentStyle}>
              <p style={titleStyle}>Language:</p>
              <p style={detailStyle}>{detail.language}</p>
            </div>
            <div style={contentStyle}>
              <p style={titleStyle}>Date:</p>
              <p style={detailStyle}>{detail.date}</p>
            </div>
            <div style={contentStyle}>
              <p style={titleStyle}>Time:</p>
              <p style={detailStyle}>{detail.time}</p>
            </div>
            <div style={contentStyle}>
              <p style={titleStyle}>Contact:</p>
              <p style={detailStyle}>{detail.emergencyContact}</p>
            </div>
            <div style={contentStyle}>
              <p style={titleStyle}>Address:</p>
              <div style={detailStyle}>
                <p style={{ maxWidth: "20rem" }}>{detail.address}</p>
              </div>
            </div>
            <div style={contentStyle}>
              <p style={titleStyle}>Venue:</p>
              {detail.venue === "" ? (
                <p style={detailStyle}>Waiting..</p>
              ) : (
                <p style={detailStyle}>{detail.venue}</p>
              )}
            </div>
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
          <div
            className="neutral"
            style={{ position: "absolute", right: "3rem" }}
          >
            <button className="toggle-button" onClick={onClose}>
              Return
            </button>
          </div>
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
