import React from 'react';
import '../Pages/Session.css';
import Title from "../Title";
import SessionHistory from "../Session/SessionHistory";

export default function Session({ role }) {

  const sessionDetail = [{
    studentId: '180010',
    name:'Jingyuan',
    date: '01/03/2023',
    time: '10:30AM',
    title: 'Diagnosed with depression',
    score: '63%',
    counsellor: 'Dr Yao Ming',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobisdeserunt corrupti, ut fugit magni qui quasi nisi amet repellendus nonfuga omnis a sed impedit explicabo accusantium nihil doloremqueconsequuntur.',
    venue: 'KB303'
  },
  {
    studentId: '180011',
    name:'Gepard',
    date: '02/02/2023',
    time: '11:30AM',
    title: 'Follow up session',
    score: '46%',
    counsellor: 'Dr Yao Ming',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobisdeserunt corrupti, ut fugit magni qui quasi nisi amet repellendus nonfuga omnis a sed impedit explicabo accusantium nihil doloremqueconsequuntur.',
    venue: 'KB304'
  },
  {
    studentId: '180001',
    name:'Welt',
    date: '01/01/2023',
    time: '12:30AM',
    title: 'Traumatic recovery therapy',
    score: '27%',
    counsellor: 'Dr Yao Ming',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobisdeserunt corrupti, ut fugit magni qui quasi nisi amet repellendus nonfuga omnis a sed impedit explicabo accusantium nihil doloremqueconsequuntur.',
    venue: 'KB305'
  }];

  return (
    <div className='body-container'>
      <Title>Session History</Title>
      <div class="contentContainer">
        <SessionHistory
          sessionDetail={sessionDetail}
          role={role}
          isProfile={false}
        />
      </div>
    </div>
  )
}
