import React from 'react';
import Row from '../Monitor/MonitorRow';
import SessionHistory from '../Session/SessionHistory'

function studentProfile() {
  return (
    <div className='contentContainer'>
        <Row address='students' profilePic='/images/jingyuan.webp' name='Johnny' 
            studentId='1800795' course='Software Engineering' trimester='Y5S2' 
            atttendance='83' mentalHealth='63'/>
        <SessionHistory />

    </div>
  )
}

export default studentProfile