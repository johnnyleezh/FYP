import React, { useState, useEffect } from 'react';
import Row from '../Monitor/MonitorRow';
import SessionHistory from '../Session/SessionHistory'
import AppointmentPopUpModal from '../Appointment/AppointmentPopUpModal';
import { readData, createData, deleteData } from '../CRUD/CRUD';

function StudentProfile({ role, user, isProfile, counsellor }) {
  const [isOpen, setIsOpen] = useState(false)
  const [detail, setDetail] = useState([])
  const [mentalHealth, setMentalHealth] = useState([])
  const [monitor, setMonitor] = useState(null)

  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
  const year = today.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;

  const fetchData = async () => {
    if (user) {
      const type = (role == 'counsellor' ? "Session" : "Appointment")
      const readDetail = await readData(type, "clientId", user.uniqueId);
      setDetail(readDetail)
    }
  };
  useEffect(() => {
    fetchData();
    isMonitoring();
  }, [user, counsellor]);

  const isMonitoring = async () => {
    if (user && counsellor) {
      try {
        // Fetch data from the "Monitor" collection where the "counsellorId" matches the counsellor's uniqueId
        const fetchData = await readData("Monitor", "counsellorId", counsellor.uniqueId);
  
        // Find the entry in fetchData that matches the "user.uniqueId"
        const filterData = fetchData.find((data) => data.clientId === user.uniqueId);
  
        if (filterData) {
          // If a match is found, set the monitor state to the filtered data
          setMonitor(filterData);
        } else {
          // If no match is found, reset the monitor state to null (or do nothing, depending on your use case)
          setMonitor(null);
        }
      } catch (error) {
        // Handle any errors that occur during the data fetching process
        console.error("Error fetching monitoring data:", error);
        setMonitor(null);
      }
    }
  };
  

  const createMonitor = () => {
    const monitor = {
      date: formattedDate,
      clientId: user.uniqueId,
      counsellorId: counsellor.uniqueId
    }
    createData("Monitor", monitor);
    isMonitoring();
  }

  const deleteMonitor = () => {
    if (monitor) {
      deleteData("Monitor", monitor.uniqueId);
      isMonitoring();
    }
  }

  const profileBtn = () => {
    if (role == 'counsellor') {
      if (monitor) {
        return (
          <button className='btn' style={{ position: 'absolute', right: '5em', top: '15em' }}
            onClick={deleteMonitor}
          >
            Stop monitoring
          </button>
        )
      }
      return (
        <button className='btn' style={{ position: 'absolute', right: '5em', top: '15em' }}
          onClick={createMonitor}
        >
          Monitor
        </button>
      )
    }
    else if (role == 'student') {
      return (
        <button className='btn' style={{ position: 'absolute', right: '5em', top: '15em' }}
          onClick={() => { setIsOpen(true) }}
        >
          Create Appointment
        </button>
      )
    }
  }

  if (user) {
    return (
      <div className='contentContainer'>
        {profileBtn()}
        <Row
          isOpen={true}
          detail={user}
          mental={(e) => { setMentalHealth(e) }}
        />
        <h1>{role == 'counsellor' ? "Session History" : "Upcoming Appointment"}</h1>
        <SessionHistory
          sessionDetail={detail}
          role={role}
          isProfile={isProfile}
        />
        <AppointmentPopUpModal
          isOpen={isOpen}
          onClose={() => { fetchData(); setIsOpen(false) }}
          createOpen={true}
          user={user}
        />
      </div >
    )
  }
  else return null
}

export default StudentProfile