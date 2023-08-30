import React, { useState, useEffect } from "react";
import "./AppointmentList.css";
import Row from "./AppointmentListRow";
import { Button } from "../Button";
import AppointmentPopUpModal from "./AppointmentPopUpModal";
import { readData } from "../CRUD/CRUD";
import dayjs from "dayjs";

function AppointmentList({ user }) {
  // State to manage button visibility and create modal
  const [button, setButton] = useState(true);
  const [createOpen, setCreateOpen] = useState(false);
  const [list, setList] = useState([]);

  // Fetch appointment data based on user role and unique ID
  const fetchData = async () => {
    const fetchData = await readData(
      "Appointment",
      user.role === "student" ? "clientId" : "counsellorId",
      user.uniqueId
    );
    if (fetchData) {
      // Sort appointments by date and time
      const sortedList = fetchData.slice().sort((a, b) => {
        const dateA = dayjs(a.date, "DD/MM/YYYY");
        const dateB = dayjs(b.date, "DD/MM/YYYY");

        if (dateA.isBefore(dateB)) return -1;
        if (dateA.isAfter(dateB)) return 1;

        const timeA = dayjs(a.time, "h:mmA");
        const timeB = dayjs(b.time, "h:mmA");
        return timeA.diff(timeB, "minute");
      });
      setList(sortedList);
    }
    else
    {
      setList([]);
    }
  };

  // Fetch data when the component mounts or when user changes
  useEffect(() => {
    fetchData();
  }, [user]);

  // Render rows of appointment details or a message if no appointments
  const rowDisplay = () => {
    if (list.length > 0) {
      return list.map((item) => (
        <Row
          key={item.id}
          detail={item}
          openProfile={true}
          onClose={fetchData}
        />
      ));
    } else {
      return (
        <div
          style={{
            fontSize: "1.5rem",
            textAlign: "center",
            backgroundColor: "#FBE8A6",
          }}
        >
          You have no upcoming appointments.
        </div>
      );
    }
  };

  // Style for the outer layer of the component
  const outerLayer = {
    backgroundColor: "#F4976C",
    width: "95%",
    boxShadow: "0px 5px 10px 0px rgba(0,0,0,0.75)",
    marginBottom: "1rem",
  };

  return (
    <div style={outerLayer}>
      <div className="apptContainer">
        <>
          <div className="pageBtn">
            {button && (
              <Button
                buttonStyle="btn--outline"
                onClick={() => setCreateOpen(true)}
              >
                Create
              </Button>
            )}
          </div>
        </>
        <div className="apptListHeader">
          <div className="apptColumnProfileHeader">Profile</div>
          <div className="apptColumnDateHeader">Date</div>
          <div className="apptColumnTitleHeader">Details</div>
        </div>
        {rowDisplay()}
        <AppointmentPopUpModal
          isOpen={createOpen}
          onClose={() => {
            fetchData();
            setCreateOpen(false);
          }}
          createOpen={createOpen}
          user={user}
          list={list}
        />
      </div>
    </div>
  );
}

export default AppointmentList;
