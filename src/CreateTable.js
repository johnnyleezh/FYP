import React, { useState } from 'react'
import table from './tables.json'
import { db } from './firebase-config'
import { collection, getDocs, addDoc } from 'firebase/firestore'
import { createData } from './components/CRUD/CRUD'

function CreateTable() {

  const tableName = "Schedule" //change table here
  const dates = [
    { day: '0', time: '10:30 AM', userId: 'KQE0CQ7lk0Y9SabrgPz7' },
    { day: '2', time: '1:30 PM', userId: 'KQE0CQ7lk0Y9SabrgPz7' },
    { day: '1', time: '4:30 PM', userId: 'KQE0CQ7lk0Y9SabrgPz7' },
    { day: '4', time: '10:30 AM', userId: 'KQE0CQ7lk0Y9SabrgPz7' },
];
  const apptCollectionRef = collection(db, tableName)

  const createUser = async () => {
    for (const Data of dates) {
      // console.log(Data)
      // await addDoc(apptCollectionRef, Data);
      createData(tableName, Data)
    }
    console.log("Successfully created in " + table + " with these data", tableName )
  };


  return (
    <div>
      <button onClick={() => { createUser() }}>Create</button>
    </div>
  )
}

export default CreateTable