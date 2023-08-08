import React, { useState, useEffect } from 'react';
import '../Pages/Session.css';
import Title from '../Title';
import SessionHistory from '../Session/SessionHistory';
import { readData } from '../CRUD/CRUD';
import dayjs from 'dayjs';

export default function Session({ user }) {
  const [session, setSession] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const readSession = await readData(
        'Session',
        user.role === 'student' ? 'clientId' : 'counsellorId',
        user.uniqueId
      );
      const sortedSession = [...readSession].sort((a, b) => {
        const dateA = dayjs(a.date, 'DD/MM/YYYY').valueOf(); // Fix the date format here
        const dateB = dayjs(b.date, 'DD/MM/YYYY').valueOf(); // Fix the date format here

        // Sort in descending order (newest to oldest)
        return dateB - dateA;
      });
      setSession(sortedSession);
    };
    fetchData();
  }, [user]);

  return (
    <div className='body-container'>
      <Title>Session History</Title>
      <SessionHistory
        sessionDetail={session}
        role={user.role}
        isProfile={false}
      />
    </div>
  );
}
