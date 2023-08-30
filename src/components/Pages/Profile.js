import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../../App.css';
import Title from '../Title';
import StudentProfile from '../Profile/StudentProfile';
import { readSpecificData } from '../CRUD/CRUD';

function Profile({ user }) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const uniqueId = searchParams.get('uniqueId');
  const [client, setClient] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await readSpecificData('User', uniqueId);
      setClient(data);
    };

    fetchData();
  }, [uniqueId]);

  return (
    <div className="body-container">
      <Title>Profile</Title>
      <StudentProfile role={'counsellor'} profile={client} isProfile={true} user={user} />
    </div>
  );
}

export default Profile;
