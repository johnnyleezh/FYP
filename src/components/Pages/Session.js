import React, { useState, useEffect } from 'react';
import '../Pages/Session.css';
import Title from "../Title";
import SessionHistory from "../Session/SessionHistory";
import { readData } from '../CRUD/CRUD';

export default function Session({ user }) {

  const [session, setSession] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const readSession = await readData("Session", user.role === 'student' ? 'clientId' : 'counsellorId', user.uniqueId);
      setSession(readSession)
    };
    fetchData();
  }, [user]);
  const [show, setShow] = useState(false);
  const showModal = (e) => {
    setShow(!show);
  };

  const sessionDetail = [{
    studentId: '180010',
    name: 'Jingyuan',
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
    name: 'Gepard',
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
    name: 'Welt',
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
        <SessionHistory
          sessionDetail={session}
          role={user.role}
          isProfile={false}
        />
    </div>
  )
}
