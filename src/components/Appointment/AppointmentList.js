import React, { useState, useEffect } from 'react';
import './AppointmentList.css';
import Row from './AppointmentListRow';
import AppointmentPopUpModal from './AppointmentPopUpModal';
import SessionHistoryRow from '../Session/SessionHistoryRow';
import { readData, readSpecificData } from '../CRUD/CRUD';

function AppointmentList({ user }) {
  const [createOpen, setCreateOpen] = useState(false)
  const [list, setList] = useState([])

  const fetchData = async () => {
    const fetchData = await readData("Appointment", user.role === 'student' ? 'clientId' : 'counsellorId', user.uniqueId);
    setList(fetchData)
  };

  useEffect(() => {
    fetchData();
  }, []);

  const rowDisplay = () => {
    if (list) {
      const rowList = [];
      for (let i = 0; i < list.length; i++) {
        rowList.push(
          <Row
            detail={list[i]}
            openProfile={true}
            onClose={() => { fetchData() }}
          />
        )
      }
      return rowList
    }
    else {
      return <div style={{ fontSize: '1.5rem', textAlign: 'center' }}>You have no upcoming appointments.</div>
    }
  }

  return (
    <div className='apptContainer'>
      <button className='btn' style={{ position: 'absolute', right: '5em', top: '15em' }} onClick={() => { setCreateOpen(true) }}>
        Create
      </button>
      <div className="apptListHeader">
        <div className="apptColumnProfileHeader">
          Profile
        </div>
        <div className="apptColumnDateHeader">
          Date
        </div>
        <div className="apptColumnTitleHeader">
          Title
        </div>
      </div>
      {rowDisplay()}
      <AppointmentPopUpModal
        isOpen={createOpen}
        onClose={() => { setCreateOpen(false); fetchData() }}
        createOpen={createOpen}
        user={user}
        list={list}
      />
    </div>
  )
}

export default AppointmentList