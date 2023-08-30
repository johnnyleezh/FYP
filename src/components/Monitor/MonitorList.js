import React, { useState, useEffect } from "react";
import "../../App.css";
import MonitorRow from "./MonitorRow";
import { readData, readSpecificData } from "../CRUD/CRUD";

function Monitor({ user }) {
  // State to hold monitor data and client list
  const [clientList, setClientList] = useState([]);

  // Fetch monitor data for the user's assigned clients
  const fetchMonitor = async () => {
    try {
      const monitorData = await readData(
        "Monitor",
        "counsellorId",
        user.uniqueId
      );
      const clients = await Promise.all(
        monitorData.map(async (monitorEntry) => {
          const clientData = await readSpecificData(
            "User",
            monitorEntry.clientId
          );
          return clientData;
        })
      );
      setClientList(clients);
    } catch (error) {
      console.error("Error fetching monitor data:", error);
      setClientList([]);
    }
  };

  // Fetch monitor data on component mount or when the user changes
  useEffect(() => {
    fetchMonitor();
  }, [user]);

  // Render monitor rows based on the fetched client list
  const renderMonitorRows = () => {
    if (clientList.length > 0) {
      return clientList.map((client) => (
        <MonitorRow
          clickable={true}
          isOpen={true}
          detail={client}
          mental={(e) => {}}
        />
      ));
    } else {
      return (
        <div
          style={{
            marginBottom: "1rem",
            backgroundColor: "#FBE8A6",
            padding: "2rem 0rem",
          }}
        >
          <h2>Monitor List is empty</h2>
        </div>
      );
    }
  };

  return (
    <div
      style={{
        width: "95%",
        backgroundColor: "#F4976C",
        margin: "0rem auto 1rem auto",
        boxShadow: "0px 5px 10px 0px rgba(0,0,0,0.75)",
      }}
    >
      <h1 style={{ margin: "2rem 0 1rem 0" }}>Monitor List</h1>
      <div className="contentContainer">{renderMonitorRows()}</div>
    </div>
  );
}

export default Monitor;
