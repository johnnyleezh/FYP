import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LatestScore } from "../CRUD/ReadScore";
import StudentProfile from "../Profile/StudentProfile";

const MonitorRow = ({ isOpen, detail, mental, clickable }) => {
  // Prepare the data object to pass to the StudentProfile component
  const dataToPass = {
    detail: detail,
  };

  // Function to display the mental health score section
  const displayScore = () => {
    const data = LatestScore(detail.uniqueId);

    if (data) {
      mental(data);
      return (
        <div className="columnContainer">
          <p className="score">{data.score}%</p>
          <p>Mental Health Score</p>
          <div style={{ textAlign: "center" }}>
            <p>Last Tested: {data.date}</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="columnContainer" style={{ backgroundColor: "" }}>
          <p className="score">0%</p>
          <p>Mental Health Score</p>
          <div style={{ textAlign: "center" }}>
            <p>Last Tested: Yet to be tested</p>
          </div>
        </div>
      );
    }
  };

  const content = () => {
    return (
      <div className="rowContainer">
        <div className="columnContainer">
          <img
            src={detail.picture}
            className="photo"
            alt="Student Photo"
            width="140em"
            height="180em"
          />
        </div>
        <div className="columnMiddleContainer">
          <div style={{ flex: 1.5, display: "flex", flexDirection: "column" }}>
            {/* Student details */}
            <div className="textBoxLeft">Name: </div>
            <div className="textBoxLeft">Student ID: </div>
            <div className="textBoxLeft">Course: </div>
            <div className="textBoxLeft">Trimester:</div>
            <div className="textBoxLeft">CGPA:</div>
          </div>
          <div style={{ flex: "3", display: "flex", flexDirection: "column" }}>
            <div className="textBoxRight">{detail.name}</div>
            <div className="textBoxRight">{detail.userId}</div>
            <div className="textBoxRight">{detail.course}</div>
            <div className="textBoxRight">{detail.trimester}</div>
            <div className="textBoxRight">{detail.CGPA}</div>
          </div>
        </div>
        {/* Display average attendance */}
        <div className="columnContainer">
          <p className="score">{detail.attendance}%</p>
          <p>Average Attendance Score</p>
        </div>
        {/* Display mental health score */}
        {displayScore()}
      </div>
    );
  };

  // Render the monitor row component
  if (!isOpen) {
    return null;
  }
  if (clickable) {
    return (
      <div>
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to={{
            pathname: "/profile",
            search: `?uniqueId=${detail.uniqueId}`,
          }}
          onDragStart={(e) => {
            e.preventDefault();
          }}
        >
          {content()}
        </Link>
      </div>
    );
  } else {
    return <div>{content()}</div>;
  }
};

export default MonitorRow;
