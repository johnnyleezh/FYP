import React, { useState, useEffect } from "react";
import SessionSummaryModal from "../Session/SessionSummaryModal";
import { readSpecificData, readData } from "../CRUD/CRUD";
import { Link } from "react-router-dom";

function SessionHistoryRow({ detail, role, isProfile }) {
  const [counsellor, setCounsellor] = useState([]);
  const [mentalHealth, setMentalHealth] = useState([]);
  const [client, setClient] = useState([]);

  const fetchCounsellorData = async () => {
    const readCounsellor = await readSpecificData("User", detail.counsellorId);
    setCounsellor(readCounsellor);
  };

  const fetchMentalHealthData = async () => {
    const readMentalHealth = await readSpecificData(
      "Mental Health",
      detail.healthId
    );
    if (readMentalHealth) {
      setMentalHealth(readMentalHealth);
    } else {
      setMentalHealth(0);
    }
  };
  const fetchClientData = async () => {
    const readClient = await readSpecificData("User", detail.clientId);
    setClient(readClient);
  };
  useEffect(() => {
    fetchCounsellorData();
    fetchMentalHealthData();
    fetchClientData();
  }, []);
  const [show, setShow] = useState(false);
  const showModal = () => {
    setShow(!show);
  };

  if (role == "counsellor") {
    if (isProfile) {
      return (
        <div class="sessionRowContainer">
          <div
            className="sessionHistoryContent"
            onClick={(e) => {
              showModal(e);
            }}
          >
            <div className="sessionHistoryColumn" style={{ flex: 1 }}>
              <p className="data">{detail.date}</p>
            </div>
            <div className="sessionHistoryColumn" style={{ flex: 2 }}>
              <p className="data">{detail.topic}</p>
            </div>
            <div className="sessionHistoryColumn" style={{ flex: 1 }}>
              <p className="data">
                {mentalHealth.score ? mentalHealth.score + "%" : ""}
              </p>
            </div>
          </div>
          <SessionSummaryModal
            onClose={showModal}
            show={show}
            counsellor={counsellor}
            detail={detail}
            mentalHealth={mentalHealth}
          />
        </div>
      );
    } else {
      return (
        <div class="sessionRowContainer">
          <div
            className="sessionHistoryContent"
            onClick={(e) => {
              showModal(e);
            }}
          >
            <div className="sessionHistoryColumn" style={{ flex: 1 }}>
              <p className="data">{detail.date}</p>
            </div>
            <div className="sessionHistoryColumn" style={{ flex: 1 }}>
              <p className="data">
                <Link
                  to={{
                    pathname: "/profile",
                    search: `?uniqueId=${client.uniqueId}`,
                  }}
                  onDragStart={(e) => {
                    e.preventDefault();
                  }}
                >
                  {client.userId}
                </Link>
              </p>
            </div>
            <div className="sessionHistoryColumn" style={{ flex: 1 }}>
              <p className="data">{client.name}</p>
            </div>
            <div className="sessionHistoryColumn" style={{ flex: 2 }}>
              <p className="data">{detail.topic}</p>
            </div>
          </div>
          <SessionSummaryModal
            onClose={showModal}
            show={show}
            counsellor={counsellor}
            detail={detail}
            mentalHealth={mentalHealth}
          />
        </div>
      );
    }
  } else {
    //Student role
    if (isProfile) {
      return (
        <div class="sessionRowContainer">
          <div className="sessionHistoryContent" style={{ cursor: "default" }}>
            <div className="sessionHistoryColumn" style={{ flex: 1 }}>
              <p className="data">{detail.date}</p>
            </div>
            <div className="sessionHistoryColumn" style={{ flex: 1 }}>
              <p className="data">{detail.time}</p>
            </div>
            <div className="sessionHistoryColumn" style={{ flex: 1 }}>
              <p className="data">{counsellor.name}</p>
            </div>
            <div className="sessionHistoryColumn" style={{ flex: 2 }}>
              <p className="data">{detail.topic}</p>
            </div>
            <div className="sessionHistoryColumn" style={{ flex: 1 }}>
              <p className="data">{detail.venue}</p>
            </div>
            <div className="sessionHistoryColumn" style={{ flex: 1 }}>
              {detail.confirmation ? (
                <p
                  className="data"
                  style={{
                    textAlign: "center",
                    backgroundColor: "#78f89f",
                    padding: "0.25rem 0.25rem",
                    borderRadius: "0.35rem",
                  }}
                >
                  Confirmed
                </p>
              ) : (
                <p
                  className="data"
                  style={{
                    textAlign: "center",
                    backgroundColor: "red",
                    padding: "0.25rem 0.25rem",
                    borderRadius: "0.35rem",
                  }}
                >
                  Not Confirmed
                </p>
              )}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div class="sessionRowContainer">
          <div
            className="sessionHistoryContent"
            onClick={(e) => {
              showModal(e);
            }}
          >
            <div className="sessionHistoryColumn" style={{ flex: 1 }}>
              <p className="data">{detail.date}</p>
            </div>
            <div className="sessionHistoryColumn" style={{ flex: 2 }}>
              <p className="data">{detail.topic}</p>
            </div>
            <div className="sessionHistoryColumn" style={{ flex: 1 }}>
              <p className="data">
                {mentalHealth.score ? mentalHealth.score + "%" : ""}
              </p>
            </div>
          </div>
          <SessionSummaryModal
            onClose={showModal}
            show={show}
            counsellor={counsellor}
            detail={detail}
            mentalHealth={mentalHealth}
          />
        </div>
      );
    }
  }
}

export default SessionHistoryRow;
