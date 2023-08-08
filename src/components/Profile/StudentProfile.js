import React, { useState, useEffect } from 'react';
import Row from '../Monitor/MonitorRow';
import { Button } from '../Button';
import SessionHistory from '../Session/SessionHistory'
import AppointmentPopUpModal from '../Appointment/AppointmentPopUpModal';
import { readData, createData, deleteData } from '../CRUD/CRUD';
import dayjs from 'dayjs';

function StudentProfile({ role, profile, isProfile, user }) {
  const [button, setButton] = useState(true);
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
    if (profile) {
      const type = role === 'counsellor' ? 'Session' : 'Appointment';
      const readDetail = await readData(type, 'clientId', profile.uniqueId);

      const sortedDetail = readDetail.slice().sort((a, b) => {
        const dateA = dayjs(a.date, 'DD/MM/YYYY');
        const dateB = dayjs(b.date, 'DD/MM/YYYY');

        return dateA.diff(dateB, 'day'); // Sort in ascending order (oldest to newest)
      });

      setDetail(sortedDetail);
    }
  };
  
  useEffect(() => {
    fetchData();
    isMonitoring();
  }, [profile, user]);

  const isMonitoring = async () => {
    if (profile && user) {
      try {
        // Fetch data from the "Monitor" collection where the "counsellorId" matches the counsellor's uniqueId
        const fetchData = await readData("Monitor", "counsellorId", user.uniqueId);

        // Find the entry in fetchData that matches the "user.uniqueId"
        const filterData = fetchData.find((data) => data.clientId === profile.uniqueId);

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
      clientId: profile.uniqueId,
      counsellorId: user.uniqueId
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

  const pageBtn = () => {
    if (user.role == 'counsellor') {
      if (monitor) {
        return (
          <>
            <div className='pageBtn'>
              {button && <Button
                buttonStyle='btn--outline'
                onClick={deleteMonitor}>
                Stop monitoring
              </Button>}
            </div>
          </>
        )
      }
      return (
        <>
          <div className='pageBtn'>
            {button && <Button
              buttonStyle='btn--outline'
              onClick={createMonitor}>
              Monitor
            </Button>}
          </div>
        </>
      )
    }
    else if (user.role == 'student') {
      if (user.uniqueId == profile.uniqueId) {
        return (
          <>
            <div className='pageBtn'>
              {button && <Button
                buttonStyle='btn--outline'
                onClick={() => { setIsOpen(true) }}>
                Create Appointment
              </Button>}
            </div>
          </>
        )
      }
    }
  }
  const outerLayer = {
    backgroundColor: '#F4976C',
    width: '95%',
    boxShadow: '0px 5px 10px 0px rgba(0,0,0,0.75)',
    marginBottom: '1rem'
  }
  if (profile) {
    return (
      <div style={outerLayer}>
        <div className='contentContainer'>
          {pageBtn()}
          <Row
            isOpen={true}
            detail={profile}
            mental={(e) => { setMentalHealth(e) }}
          />
        </div >
        <h1 style={{ backgroundColor: "#F4976C", textDecoration:'underline' }}>{role == 'counsellor' ? "Session History" : "Upcoming Appointment"}</h1>
        <div>
          <SessionHistory
            sessionDetail={detail}
            role={role}
            isProfile={isProfile}
          />
        </div>
        <AppointmentPopUpModal
          isOpen={isOpen}
          onClose={() => { fetchData(); setIsOpen(false) }}
          createOpen={true}
          user={profile}
        />

      </div>
    )
  }
  else return null
}

export default StudentProfile