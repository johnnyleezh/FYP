import React, { useState, useEffect } from 'react';
import './AppointmentList.css';
import Row from './AppointmentListRow';
import AppointmentPopUpModal from './AppointmentPopUpModal';
import SessionHistoryRow from '../Session/SessionHistoryRow';
import { readData, readSpecificData } from '../CRUD/CRUD';

function AppointmentList({ detail, user }) {
console.log(" this is from appointmentlist ",user)
  const [createOpen, setCreateOpen] = useState(false)
  const rowDisplay = () => {
      const rowDetail = [];
      for (let i = 0; i < detail.length; i++) {
        rowDetail.push(
          <Row
            detail={detail[i]}
            openProfile={true}
          />
        )
      }
      return rowDetail
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
        onClose={() => { setCreateOpen(false) }}
        createOpen={createOpen}
        user={user}
        detail={detail}
      />
    </div>
  )
}

export default AppointmentList