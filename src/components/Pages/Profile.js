import React, { useState, useEffect } from 'react';
import '../../App.css';
import { Button } from '../Button';
import Title from '../Title';
import StudentProfile from '../Profile/StudentProfile';
import { useLocation } from 'react-router-dom';
import { readSpecificData } from '../CRUD/CRUD';

function Profile({user}) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const uniqueId = searchParams.get('uniqueId');
  const [client, setClient] = useState();
  const fetchData = async () => {
    const data = await readSpecificData('User', uniqueId);
    setClient(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <div className="body-container">
      <Title>Profile</Title>
      <StudentProfile role={'counsellor'} profile={client} isProfile={true} user={user} />
    </div>
  );
}

export default Profile;
