import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import "../Pages/Session.css";
import Title from "../Title";
import SessionHistory from "../Session/SessionHistory";
import { readData } from "../CRUD/CRUD";

export default function Session({ user }) {
  const [session, setSession] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const sessionType = user.role === "student" ? "clientId" : "counsellorId";
      const readSession = await readData("Session", sessionType, user.uniqueId);

      if (readSession) {
        const sortedSession = readSession.sort((a, b) => {
          const dateA = dayjs(a.date, "DD/MM/YYYY").valueOf();
          const dateB = dayjs(b.date, "DD/MM/YYYY").valueOf();

          return dateB - dateA; // Sort in descending order (newest to oldest)
        });
        setSession(sortedSession);
      }
    };

    fetchData();
  }, [user]);

  return (
    <div className="body-container">
      <Title>Session History</Title>
      <SessionHistory
        sessionDetail={session}
        role={user.role}
        isProfile={false}
      />
    </div>
  );
}
