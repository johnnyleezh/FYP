import React from 'react';
import Row from '../Monitor/MonitorRow';
import SessionHistory from '../Session/SessionHistory'

function StudentProfile({ role, detail, isProfile }) {

  //CRUD
  const sessionDetail = [{
    date: '01/03/2023',
    time: '10:30AM',
    title: 'Diagnosed with depression',
    score: '63%',
    counsellor: 'Dr Yao Ming',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobisdeserunt corrupti, ut fugit magni qui quasi nisi amet repellendus nonfuga omnis a sed impedit explicabo accusantium nihil doloremqueconsequuntur.',
    venue: 'KB303'
  },
  {
    date: '02/02/2023',
    time: '11:30AM',
    title: 'Follow up session',
    score: '46%',
    counsellor: 'Dr Yao Ming',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobisdeserunt corrupti, ut fugit magni qui quasi nisi amet repellendus nonfuga omnis a sed impedit explicabo accusantium nihil doloremqueconsequuntur.',
    venue: 'KB304'
  },
  {
    date: '01/01/2023',
    time: '12:30AM',
    title: 'Traumatic recovery therapy',
    score: '27%',
    counsellor: 'Dr Yao Ming',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobisdeserunt corrupti, ut fugit magni qui quasi nisi amet repellendus nonfuga omnis a sed impedit explicabo accusantium nihil doloremqueconsequuntur.',
    venue: 'KB305'
  }];

  return (
    <div className='contentContainer'>
      <button className='btn' style={{ position: 'absolute', right: '5em', top: '15em' }}>Monitor</button>
      <Row
        isOpen={true}
        detail={detail}
      />
      <SessionHistory
        sessionDetail={sessionDetail}
        role={role}
        isProfile={isProfile}
      />

    </div >
  )
}

export default StudentProfile