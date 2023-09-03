import React, { useState, useEffect } from "react";
import { createData, readData, readTableData } from "../CRUD/CRUD";
import SearchBar from "../CRUD/SearchBar";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import DatePicker from "../CRUD/DatePicker";
import TimePicker from "../CRUD/TimePicker";
import PickerWithAutocompleteField from "../CRUD/ScheduleDate";
import TimeAutoComplete from "../CRUD/TimeAutoComplete";
import Paper from "@mui/material/Paper";

function AppointmentCreate({ isOpen, onClose, user }) {
  const [createApptDetails, setCreateApptDetails] = useState({
    clientId: user.role === "student" ? user.uniqueId : "",
    topic: "",
    counsellorId: user.role === "student" ? "" : user.uniqueId,
    date: "",
    time: "",
    service: "",
    facebookLink: "",
    emergencyContact: "",
    address: "",
    language: "",
    venue: "",
    confirmation: false,
  });
  const [studentList, setStudentList] = useState([]);
  const [counsellorList, setCounsellorList] = useState([]);
  const [selectStudent, setSelectStudent] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState([]);
  const [day, setDay] = useState();
  const [service, setService] = useState([
    "Mental Health",
    "Personal Development",
    "Emotional/Interpersonal",
    "Family/Relationship",
    "Confidence/Self-esteem",
    "Adjustment to unviersity life",
    "Crisis & Trauma",
  ]);
  const [language, setLanguage] = useState([
    "English",
    "Mandarin",
    "Tamil",
    "Malay",
  ]);

  const obtainStudentList = async () => {
    const list = await readData("User", "role", "student");
    if (list) {
      setStudentList(list);
    }
  };

  const obtainCounsellorList = async () => {
    const list = await readData("User", "role", "counsellor");
    if (list) {
      setCounsellorList(list);
    }
  };

  const fetchUsers = async () => {
    const data = await readTableData("User");
    setSelectStudent(data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreateApptDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleDateChange = (value) => {
    setCreateApptDetails((prevDetails) => ({
      ...prevDetails,
      date: value.format("DD/MM/YYYY"),
    }));
    setDay(value.format("dddd"));
  };

  const handleTimeChange = (value) => {
    setCreateApptDetails((prevDetails) => ({
      ...prevDetails,
      time: value,
    }));
  };

  const obtainedProfile = (value) => {
    setSelectedProfile(value);
    if (value) {
      setCreateApptDetails((prevDetails) => ({
        ...prevDetails,
        [user.role === "counsellor" ? "clientId" : "counsellorId"]:
          value.uniqueId,
      }));
    }
  };

  useEffect(() => {
    fetchUsers();
    obtainStudentList();
    obtainCounsellorList();
  }, []);

  useEffect(() => {
    const selectedId =
      user.role === "counsellor"
        ? createApptDetails.clientId
        : createApptDetails.counsellorId;
    const selectedStudent = selectStudent.find(
      (student) => student.userId === selectedId
    );
    if (selectedStudent) {
      setCreateApptDetails((prevDetails) => ({
        ...prevDetails,
        [user.role === "counsellor" ? "clientId" : "counsellorId"]:
          selectedStudent.uniqueId,
      }));
    }
  }, [createApptDetails, selectStudent]);

  const createUser = async () => {
    if (createApptDetails.clientId && createApptDetails.counsellorId) {
      createData("Appointment", createApptDetails);
      onClose();
    }
  };

  const CustomPaper = (props) => {
    return <Paper {...props} style={{ maxHeight: "160px" }} />;
  };

  const rowStyle = {
    flex: 1,
    margin: "0.25rem",
  };

  const fieldStyle = {};

  if (!isOpen) return null;

  return (
    <div
      style={{ backgroundColor: "beige", padding: "2.5rem", height: "100%" }}
    >
      <div style={{ margin: "1rem" }}>
        <h1 style={{ textDecoration: "underline" }}>Create Appointment</h1>
      </div>
      <div
        style={{
          padding: "1rem",
          height: "20rem",
          display: "flex",
          fontSize: "1.4rem",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
            margin: "0 0.25rem",
          }}
        >
          <div style={rowStyle}>
            <TextField
              fullWidth
              placeholder="Topic"
              name="topic"
              sx={{ backgroundColor: "white" }}
              label={"Topic"}
              onChange={handleChange}
            />
          </div>
          <div style={rowStyle}>
            <SearchBar
              sx={{ width: "100%", backgroundColor: "white" }}
              label={
                user.role === "counsellor"
                  ? "Student ID/Name"
                  : "Counsellor ID/Name"
              }
              user={user}
              data={user.role === "counsellor" ? studentList : counsellorList}
              selectedProfile={obtainedProfile}
            />
          </div>
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
            margin: "0 0.25rem",
          }}
        >
          <div style={rowStyle}>
            <Autocomplete
              fullWidth
              disablePortal
              id="service"
              options={service}
              sx={{ backgroundColor: "white" }}
              ListboxProps={{
                style: {
                  maxHeight: "calc(3 * 2.6rem)",
                  overflowY: "auto",
                },
              }}
              onInputChange={(e, value) => {
                e.target = { name: "service", value: value };
                handleChange(e);
              }}
              renderInput={(params) => (
                <TextField {...params} label="Service" placeholder="Service" />
              )}
            />
          </div>
          <div style={rowStyle}>
            <TextField
              fullWidth
              placeholder="Facebook Profile Link"
              name="facebookLink"
              sx={{ backgroundColor: "white" }}
              label={"Online Counselling"}
              onChange={handleChange}
            />
          </div>
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
            margin: "0 0.25rem",
          }}
        >
          <div style={rowStyle}>
            <Autocomplete
              fullWidth
              disablePortal
              name="language"
              options={language}
              sx={{ backgroundColor: "white" }}
              PaperComponent={CustomPaper}
              onInputChange={(e, value) => {
                e.target = { name: "language", value: value };
                handleChange(e);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Prefered Language"
                  placeholder="Prefered Language"
                />
              )}
            />
          </div>
          <div style={rowStyle}>
            <TextField
              fullWidth
              placeholder="Emergency Contact"
              name="emergencyContact"
              sx={{ backgroundColor: "white" }}
              label={"Emergency Contact"}
              onChange={handleChange}
            />
          </div>
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
            margin: "0 0.25rem",
          }}
        >
          <div style={rowStyle}>
            <TextField
              fullWidth
              placeholder="Address"
              name="address"
              sx={{ backgroundColor: "white" }}
              label={"Current Address"}
              onChange={handleChange}
            />
          </div>
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
            margin: "0 0.25rem",
          }}
        >
          <div style={rowStyle}>
            {user.role === "counsellor" ? (
              <DatePicker
                label="Date"
                sx={{ backgroundColor: "white", width: "100%" }}
                onChange={handleDateChange}
              />
            ) : (
              <PickerWithAutocompleteField
                counsellorId={createApptDetails.counsellorId}
                sx={{ width: "100%", backgroundColor: "white" }}
                onChange={handleDateChange}
              />
            )}
          </div>
          <div style={rowStyle}>
            {user.role === "counsellor" ? (
              <TimePicker
                sx={{ backgroundColor: "white", width: "100%" }}
                label={"Time"}
                onChange={(e) => handleTimeChange(e.format("h:mm a"))}
              />
            ) : (
              <TimeAutoComplete
                sx={{ backgroundColor: "white", width: "15.25rem" }}
                counsellorId={createApptDetails.counsellorId}
                day={day}
                label={"Pick time"}
                user={user}
                selectedTime={(e) => handleTimeChange(e.time)}
              />
            )}
          </div>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className="cancel" style={{ flex: 1 }}>
          <button className="toggle-button" onClick={onClose}>
            Cancel
          </button>
        </div>
        <div className="actions" style={{ flex: 1 }}>
          <button className="toggle-button" onClick={createUser}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppointmentCreate;
