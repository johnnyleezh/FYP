import React, { useState, useEffect } from 'react';
import '../../App.css';
import { Button } from '../Button';
import MonitorRow from './MonitorRow';
import { readData, readSpecificData } from '../CRUD/CRUD';

function Monitor({ user }) {

  const [mentalHealth, setMentalHealth] = useState([])
  const [monitor, setMonitor] = useState([])
  const [list, setList] = useState(null)

  const fetchMonitor = async () => {
    try {
      const fetchData = await readData("Monitor", "counsellorId", user.uniqueId);
      if (fetchData) {
        const clientList = []
        for (let i = 0; i < fetchData.length; i++) {
          const fetchClients = await readSpecificData("User", fetchData[i].clientId);
          clientList.push(fetchClients)
        }
        setList(clientList)
      }
    } catch (error) {
      setMonitor([]); // Set an empty array as the default value for monitor in case of an error
    }
  };

  useEffect(() => {
    fetchMonitor();
  }, [user]);

  const monitorRowDisplay = () => {
    if (list) {
      const rowList = [];
      for (let i = 0; i < list.length; i++) {
        rowList.push(
          <MonitorRow
            isOpen={true}
            detail={list[i]}
            mental={(e) => { }}
          />
        )
      }
      return rowList
    }
    else {
      return (
        <div style={{ marginBottom: '1rem', backgroundColor: '#FBE8A6', padding: '2rem 0rem' }}>
          <h2>Monitor List is empty</h2>
        </div>
      )
    }
  }

  return (
    <div style={{ width: "95%", backgroundColor: '#F4976C', margin: '0rem auto 1rem auto', boxShadow: '0px 5px 10px 0px rgba(0,0,0,0.75)' }}>
      <h1 style={{ margin: '2rem 0 1rem 0' }}>Monitor List</h1>
      <div class="contentContainer">
        {monitorRowDisplay()}
      </div>
    </div>
  );
}

export default Monitor;
