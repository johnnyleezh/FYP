import React, { useState } from 'react';
import './AppointmentList.css';
import Row from './AppointmentListRow';
import AppointmentPopUpModal from './AppointmentPopUpModal';

function AppointmentList() {
  
  const [createOpen, setCreateOpen] = useState(false)

  const students = [  {
    profilePic: '/images/jingyuan.webp',
    name: 'Johnny',
    studentId: '1800795',
    course: 'Software Engineering',
    trimester: 'Y5S2',
    attendance: '83',
    mentalHealth: '63',
    address: '/profile',
    appt: '01/02/2023',
    lastTested: '02/03/2022'
  },
  {
    profilePic: '/images/gepard.webp',
    name: 'Gepard',
    studentId: '1800796',
    course: 'Computer Science',
    trimester: 'Y4S3',
    attendance: '92',
    mentalHealth: '78',
    address: '/profile',
    appt: '03/05/2023',
    lastTested: '04/07/2022'
  },
  {
    profilePic: '/images/welt.webp',
    name: 'Welt',
    studentId: '1800797',
    course: 'Electrical Engineering',
    trimester: 'Y6S1',
    attendance: '95',
    mentalHealth: '85',
    address: '/profile',
    appt: '05/06/2023',
    lastTested: '06/08/2022'
  },
  {
    profilePic: '/images/jingyuan.webp',
    name: 'Lily',
    studentId: '1800798',
    course: 'Business Administration',
    trimester: 'Y3S2',
    attendance: '87',
    mentalHealth: '75',
    address: '/profile',
    appt: '07/08/2023',
    lastTested: '08/10/2022'
  },
  {
    profilePic: '/images/jingyuan.webp',
    name: 'Alexander',
    studentId: '1800799',
    course: 'Mechanical Engineering',
    trimester: 'Y7S1',
    attendance: '90',
    mentalHealth: '80',
    address: '/profile',
    appt: '09/10/2023',
    lastTested: '10/12/2022'
  }]

const rowDisplay = ()=>{
  const rowDetail = [];
  for (let i = 0; i < students.length; i++){
    rowDetail.push(
      <Row
      detail={students[i]}
      date='03/07/2023'
      time='5:00pm'
      title='Having trouble thinking straight'
    />
    )
  }
  return rowDetail
}

  return (
    <div className='apptContainer'>
      <button className='btn' style={{ position: 'absolute', right: '5em', top: '15em' }} onClick={() => { setCreateOpen(true) }}>Create</button>
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
      {/* <Row
        detail={detail}
        date='03/07/2023'
        time='5:00pm'
        title='Having trouble thinking straight'
      />
      <Row
        detail={detail}
        date='03/07/2023'
        time='5:00pm'
        title='Having trouble thinking straight'
      />
      <Row
        detail={detail}
        date='03/07/2023'
        time='5:00pm'
        title='Having trouble thinking straight'
      /> */}
      <AppointmentPopUpModal
        isOpen={createOpen}
        onClose={() => { setCreateOpen(false) }}
        createOpen={createOpen}
        date='02/03/2023'
        time='10:30AM'
        counsellor='Dr. Yao Chin Kuok'
        title='Feeling lost'
      />
    </div>
  )
}

export default AppointmentList