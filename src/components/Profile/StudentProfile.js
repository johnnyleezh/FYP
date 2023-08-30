import React, { useState, useEffect } from "react";
import Row from "../Monitor/MonitorRow";
import { Button } from "../Button";
import SessionHistory from "../Session/SessionHistory";
import AppointmentPopUpModal from "../Appointment/AppointmentPopUpModal";
import { readData, createData, deleteData } from "../CRUD/CRUD";
import dayjs from "dayjs";

function StudentProfile({ role, profile, isProfile, user }) {
  const [button, setButton] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [detail, setDetail] = useState([]);
  const [mentalHealth, setMentalHealth] = useState([]);
  const [monitor, setMonitor] = useState(null);

  // Get current date
  const formattedDate = dayjs().format("DD/MM/YYYY");

  const fetchData = async () => {
    if (profile) {
      const type = role === "counsellor" ? "Session" : "Appointment";
      const readDetail = await readData(type, "clientId", profile.uniqueId);

      if (readDetail) {
        const sortedDetail = readDetail.slice().sort((a, b) => {
          const dateA = dayjs(a.date, "DD/MM/YYYY");
          const dateB = dayjs(b.date, "DD/MM/YYYY");
          return dateB.diff(dateA, "day"); // Sort in descending order (lastest to oldest)
        });
        setDetail(sortedDetail);
      }
    }
  };

  useEffect(() => {
    fetchData();
    isMonitoring();
  }, [profile, user]);

  const isMonitoring = async () => {
    if (profile && user) {
      try {
        const fetchData = await readData(
          "Monitor",
          "counsellorId",
          user.uniqueId
        );
        const filterData = fetchData.find(
          (data) => data.clientId === profile.uniqueId
        );

        setMonitor(filterData || null);
      } catch (error) {
        console.error("Error fetching monitoring data:", error);
        setMonitor(null);
      }
    }
  };

  const handleMonitorToggle = () => {
    if (monitor) {
      deleteData("Monitor", monitor.uniqueId);
    } else {
      const newMonitor = {
        date: formattedDate,
        clientId: profile.uniqueId,
        counsellorId: user.uniqueId,
      };
      createData("Monitor", newMonitor);
    }
    isMonitoring();
  };

  const renderPageButton = () => {
    if (user.role === "counsellor") {
      return (
        <div className="pageBtn">
          {button && (
            <Button buttonStyle="btn--outline" onClick={handleMonitorToggle}>
              {monitor ? "Stop Monitoring" : "Monitor"}
            </Button>
          )}
        </div>
      );
    } else if (user.role === "student" && user.uniqueId === profile.uniqueId) {
      return (
        <div className="pageBtn">
          {button && (
            <Button buttonStyle="btn--outline" onClick={() => setIsOpen(true)}>
              Create Appointment
            </Button>
          )}
        </div>
      );
    }
  };

  const outerLayerStyles = {
    backgroundColor: "#F4976C",
    width: "95%",
    boxShadow: "0px 5px 10px 0px rgba(0,0,0,0.75)",
    marginBottom: "1rem",
  };

  if (profile) {
    return (
      <div style={outerLayerStyles}>
        <div className="contentContainer">
          {renderPageButton()}
          <Row
            clickable={false}
            isOpen={true}
            detail={profile}
            mental={(e) => setMentalHealth(e)}
          />
        </div>
        <h1 style={{ backgroundColor: "#F4976C", textDecoration: "underline" }}>
          {role === "counsellor" ? "Session History" : "Upcoming Appointment"}
        </h1>
        <div>
          <SessionHistory
            sessionDetail={detail}
            role={role}
            isProfile={isProfile}
          />
        </div>
        <AppointmentPopUpModal
          isOpen={isOpen}
          onClose={() => {
            fetchData();
            setIsOpen(false);
          }}
          createOpen={true}
          user={profile}
        />
      </div>
    );
  } else {
    return null;
  }
}

export default StudentProfile;
