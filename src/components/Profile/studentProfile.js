import React from 'react';
import Row from '../Monitor/MonitorRow';
import SessionHistory from '../Session/SessionHistory'

function studentProfile() {
  return (
    <div className='contentContainer'>
      <button className='btn' style={{position: 'absolute', right: '5em', top: '15em'}}>Monitor</button>
      <Row
        profilePic='/images/jingyuan.webp'
        name='Johnny'
        studentId='1800795'
        course='Software Engineering'
        trimester='Y5S2'
        atttendance='83'
        mentalHealth='63'
        address='/profile'
        appt='01/02/2023'
        lastTested='02/03/2022'
      />
      <SessionHistory />

    </div>
  )
}

export default studentProfile