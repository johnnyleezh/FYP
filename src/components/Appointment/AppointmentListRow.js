import React, { useState, useEffect } from "react";
import "./AppointmentList.css";
import AppointmentPopUpModal from "./AppointmentPopUpModal";
import { readSpecificData } from "../CRUD/CRUD";
import { getStorage, ref, getDownloadURL } from "firebase/storage";


function AppointmentListRow({ detail, openProfile, onClose }) {

  const [imageUrl, setImageUrl] = useState('/images/emptyProfile.webp');
  // State to hold client data
  const [client, setClient] = useState([]);

  // Fetch client data based on detail's clientId
  const fetchData = async () => {
    const fetchData = await readSpecificData("User", detail.clientId);
    try {
      const storage = getStorage();
      const storageRef = ref(storage, '/Profile Pictures/' + fetchData.userId + '.jpg'); // Replace with the path to your image in Firebase Storage
      const url = await getDownloadURL(storageRef);
      setImageUrl(url);
    } catch (error) {
      console.error('Error fetching image:', error);
    }
    setClient(fetchData);
  };

  // Fetch data when component mounts and when detail changes
  useEffect(() => {
    fetchData();
  }, [detail]);

  const detailStyle = {
    flex: 3,
    minWidth: "20rem",
    maxWidth: "20rem",
    padding: "1rem",
    textAlign: "left",
  };
  const titleStyle = {
    flex: 1,
    padding: "1rem",
    textAlign: "right",
  };

  const contentStyle = {
    flex: 2,
    display: "flex",
    flexDirection: "row",
  };
  // State for modal open/close and message
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("Hello");

  return (
    <div>
      <div
        className="apptListContent"
        onClick={() => {
          setIsOpen(openProfile);
        }}
      >
        <div className="apptColumnProfileContent">
          <div className="rowContainer">
            <div className="columnContainer">
              {/* Display client's profile picture */}
              <img
                src={imageUrl}
                className="photo"
                alt="Student Photo"
                width="140em"
                height="180em"
              ></img>
            </div>
            <div style={{ flex: 2, display: "flex" }}>
              <div
                style={{
                  flex: "1.5",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Display client's details */}
                <div className="textBoxLeft">Name: </div>
                <div className="textBoxLeft">Student ID: </div>
                <div className="textBoxLeft">Course: </div>
                <div className="textBoxLeft">Trimester:</div>
                <div className="textBoxLeft">CGPA:</div>
              </div>
              <div
                style={{ flex: "3", display: "flex", flexDirection: "column" }}
              >
                <div className="textBoxRight">{client.name}</div>
                <div className="textBoxRight">{client.userId}</div>
                <div className="textBoxRight">{client.course}</div>
                <div className="textBoxRight">{client.trimester}</div>
                <div className="textBoxRight">{client.CGPA}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="apptColumnDateContent">
          <div style={{ marginTop: "6rem" }}>
            {/* Display appointment date and time */}
            <p>{detail.date}</p>
            <p>{detail.time}</p>
          </div>
        </div>
        <div style={{ flex: 3, display: "flex", flexDirection: "column" }}>
          <div style={contentStyle}>
            <p style={titleStyle}>Topic:</p>
            <p style={detailStyle}>{detail.topic}</p>
          </div>
          <div style={contentStyle}>
            <p style={titleStyle}>Service:</p>
            <p style={detailStyle}>{detail.service}</p>
          </div>
          <div style={contentStyle}>
            <p style={titleStyle}>Language:</p>
            <p style={detailStyle}>{detail.language}</p>
          </div>
          {detail.facebookLink.length > 0 ? (
            <div
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "0.5rem",
              }}
            >
              <a
                href={detail.facebookLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {detail.facebookLink}
              </a>
            </div>
          ) : null}
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "0.5rem",
            }}
          >
            {detail.confirmation ? (
              <div
                style={{
                  textAlign: "center",
                  backgroundColor: "#78f89f",
                  padding: "0.5rem 1rem",
                  borderRadius: "0.35rem",
                }}
              >
                Confirmed
              </div>
            ) : (
              <div
                style={{
                  textAlign: "center",
                  backgroundColor: "red",
                  padding: "0.5rem 1rem",
                  borderRadius: "0.35rem",
                }}
              >
                Not Confirmed
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Render appointment popup modal */}
      <AppointmentPopUpModal
        isOpen={isOpen}
        createOpen={!isOpen}
        onClose={() => {
          fetchData();
          setIsOpen(false);
          onClose();
        }}
        studentDetail={client}
        detail={detail}
      />
    </div>
  );
}

export default AppointmentListRow;
