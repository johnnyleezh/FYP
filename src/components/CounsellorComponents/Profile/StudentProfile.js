import React from 'react';
import Row from '../Monitor/MonitorRow';
import SessionHistory from '../Session/SessionHistory'
import { useLocation } from 'react-router-dom';

function StudentProfile() {

  const location = useLocation();
  const { detail } = location.state;
  
  //CRUD
  const sessionDetail = [{
    date: '01/03/2023',
    title: 'Diagnosed with depression',
    score: '63%',
    counsellor: 'Dr Yao Ming',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobisdeserunt corrupti, ut fugit magni qui quasi nisi amet repellendus nonfuga omnis a sed impedit explicabo accusantium nihil doloremqueconsequuntur.'
  },
  {
    date: '02/02/2023',
    title: 'Follow up session',
    score: '46%',
    counsellor: 'Dr Yao Ming',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobisdeserunt corrupti, ut fugit magni qui quasi nisi amet repellendus nonfuga omnis a sed impedit explicabo accusantium nihil doloremqueconsequuntur.'
  },
  {
    date: '01/01/2023',
    title: 'Traumatic recovery therapy',
    score: '27%',
    counsellor: 'Dr Yao Ming',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobisdeserunt corrupti, ut fugit magni qui quasi nisi amet repellendus nonfuga omnis a sed impedit explicabo accusantium nihil doloremqueconsequuntur.'
  }];

  return (
    <div className='contentContainer' >
      <button className='btn' style={{ position: 'absolute', right: '5em', top: '15em' }}>Monitor</button>
      <Row
        isOpen={true}
        detail={detail}
      />

      <SessionHistory
        sessionDetail={sessionDetail}
      />

    </div >
  )
}

export default StudentProfile