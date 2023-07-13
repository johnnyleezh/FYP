import React from 'react';
import './AppointmentList.css';
import Row from './AppointmentListRow';

function AppointmentList() {

  return (
    <div className='apptContainer'>
      <button className='btn' style={{ position: 'absolute', right: '5em', top: '15em' }}>Create</button>
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
      <Row
        profilePic='/images/jingyuan.webp'
        name='Johnny'
        studentId='1800795'
        course='Software Engineering'
        trimester='Y5S2'
        atttendance='83'
        mentalHealth='63'
        address='/profile'
        date='03/07/2023'
        time='5:00pm'
        title='Having trouble thinking straight'
      />
      <Row
        profilePic='/images/jingyuan.webp'
        name='Johnny'
        studentId='1800795'
        course='Software Engineering'
        trimester='Y5S2'
        atttendance='83'
        mentalHealth='63'
        address='/profile'
        date='03/07/2023'
        title='Having trouble thinking straight'
      />
      <Row
        profilePic='/images/jingyuan.webp'
        name='Johnny'
        studentId='1800795'
        course='Software Engineering'
        trimester='Y5S2'
        atttendance='83'
        mentalHealth='63'
        address='/profile'
        date='03/07/2023'
        title='Having trouble thinking straight'
      />
    </div>
  )
}

export default AppointmentList