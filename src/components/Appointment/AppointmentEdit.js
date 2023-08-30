import React, { useState } from "react";
import { updateData, deleteData } from "../CRUD/CRUD";
import TextField from "@mui/material/TextField";
import DatePicker from "../CRUD/DatePicker";
import TimePicker from "../CRUD/TimePicker";
import ToggleButton from "@mui/material/ToggleButton";

function AppointmentEdit({
  isOpen,
  onClose,
  detail,
  editedDetail,
  counsellor,
}) {
  const [editDetails, setEditDetails] = useState(detail);
  const [confirmation, setConfirmation] = useState(detail.confirmation);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };
  // Handle ToggleButton change
  const handleToggleChange = () => {
    const newConfirmation = !confirmation;
    setConfirmation(newConfirmation);
    setEditDetails((prevDetails) => ({
      ...prevDetails,
      confirmation: newConfirmation,
    }));
  };
  // Handle date change
  const handleDateChange = (value) => {
    setEditDetails((prevDetails) => ({
      ...prevDetails,
      date: value.format("DD/MM/YYYY"),
    }));
  };

  // Handle time change
  const handleTimeChange = (value) => {
    setEditDetails((prevDetails) => ({
      ...prevDetails,
      time: value.format("h:mm A"),
    }));
  };

  // Update the edited details
  const updateDetail = async () => {
    await updateData("Appointment", editDetails.uniqueId, editDetails);
  };

  // Handle form submission
  const handleSubmit = () => {
    updateDetail();
    onClose();
  };

  const textFieldStyle = {
    flex: 1,
    margin: "0.5rem",
  };

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
            display: "flex",
            fontSize: "1.4rem",
            width: "20rem",
            margin: "auto",
          }}
        >
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <div style={textFieldStyle}>
              <TextField
                fullWidth
                value={editDetails.topic}
                placeholder="Topic"
                name="topic"
                sx={{ backgroundColor: "white" }}
                label="Topic"
                onChange={handleChange}
              />
            </div>
            <div style={textFieldStyle}>
              <TextField
                disabled
                fullWidth
                value={counsellor.name}
                placeholder="Counsellor"
                name="counsellorId"
                sx={{ backgroundColor: "white" }}
                label="Counsellor"
                onChange={handleChange}
              />
            </div>
            <div style={textFieldStyle}>
              <DatePicker
                date={editDetails.date}
                label="Date"
                name="date"
                sx={{ backgroundColor: "white", width: "100%" }}
                onChange={handleDateChange}
              />
            </div>
            <div style={textFieldStyle}>
              <TimePicker
                time={editDetails.time}
                sx={{ backgroundColor: "white", width: "100%" }}
                label="Time"
                onChange={handleTimeChange}
              />
            </div>
            <div style={textFieldStyle}>
              <TextField
                fullWidth
                value={editDetails.venue}
                placeholder="Venue"
                name="venue"
                sx={{ backgroundColor: "white" }}
                label="Venue"
                onChange={handleChange}
              />
            </div>
            <div style={textFieldStyle}>
              <ToggleButton
                fullWidth
                sx={{
                  backgroundColor: confirmation ? "transparent" : "white",
                  "&.Mui-selected": {
                    backgroundColor: "#78f89f",
                  },
                }}
                name="confirmation"
                value={confirmation}
                selected={confirmation}
                onChange={handleToggleChange}
              >
                Confirm
              </ToggleButton>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "30rem",
            margin: "auto",
          }}
        >
          <div className="cancel" style={{ flex: 1 }}>
            <button className="toggle-button" onClick={onClose}>
              Cancel
            </button>
          </div>
          <div className="actions" style={{ flex: 1 }}>
            <button className="toggle-button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppointmentEdit;
