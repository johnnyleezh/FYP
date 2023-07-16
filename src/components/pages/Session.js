import React from 'react';
import '../pages/Session.css';
import Title from "../Title";
import SessionHistory from "../Session/SessionHistory";

export default function Session() {

  const sessionDetail = [{
    name: 'Jing Yuan',
    studentId: '1230321',
    date: '01/03/2023',
    title: 'Diagnosed with depression',
    score: '63%',
    counsellor: 'Dr Yao Ming',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobisdeserunt corrupti, ut fugit magni qui quasi nisi amet repellendus nonfuga omnis a sed impedit explicabo accusantium nihil doloremqueconsequuntur.'
  },
  {
    name: 'Jing Liu',
    studentId: '1230123',
    date: '02/02/2023',
    title: 'Follow up session',
    score: '46%',
    counsellor: 'Dr Yao Ming',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobisdeserunt corrupti, ut fugit magni qui quasi nisi amet repellendus nonfuga omnis a sed impedit explicabo accusantium nihil doloremqueconsequuntur.'
  },
  {
    name: 'Jing Yuan',
    studentId: '3210123',
    date: '01/01/2023',
    title: 'Traumatic recovery therapy',
    score: '27%',
    counsellor: 'Dr Yao Ming',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobisdeserunt corrupti, ut fugit magni qui quasi nisi amet repellendus nonfuga omnis a sed impedit explicabo accusantium nihil doloremqueconsequuntur.'
  }];

  return (
    <div className='session-container'>
      <div className='contentContainer' >
        <SessionHistory
          sessionDetail={sessionDetail}
          isCounsellor={true}
        />

      </div >
    </div>
  )
}
