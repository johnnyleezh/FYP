import React, { useState, useEffect } from 'react';
import './AppointmentList.css';
import Row from './AppointmentListRow';
import { Button } from '../Button';
import AppointmentPopUpModal from './AppointmentPopUpModal';
import SessionHistoryRow from '../Session/SessionHistoryRow';
import { readData, readSpecificData } from '../CRUD/CRUD';

function AppointmentList({ user }) {
  const [button, setButton] = useState(true);
  const [createOpen, setCreateOpen] = useState(false)
  const [list, setList] = useState([])

  const fetchData = async () => {
    const fetchData = await readData("Appointment", user.role === 'student' ? 'clientId' : 'counsellorId', user.uniqueId);
    setList(fetchData)
  };

  useEffect(() => {
    fetchData();
  }, [user]);

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
      return <div style={{ fontSize: '1.5rem', textAlign: 'center', backgroundColor: '#FBE8A6' }}>You have no upcoming appointments.</div>
    }
  }
  const outerLayer = {
    backgroundColor: '#F4976C',
    width: '95%',
    boxShadow: '0px 5px 10px 0px rgba(0,0,0,0.75)',
    marginBottom: '1rem'
  }
  return (
    <div style={outerLayer}>
      <div className='apptContainer'>
        <>
          <div className='pageBtn'>
            {button && <Button
              buttonStyle='btn--outline'
              onClick={() => { setCreateOpen(true) }}>
              Create
            </Button>}
          </div>
        </>
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
          onClose={() => { fetchData(); setCreateOpen(false); }}
          createOpen={createOpen}
          user={user}
          list={list}
        />
      </div>
    </div>
  )
}

export default AppointmentList