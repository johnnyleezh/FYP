import React, { useState } from 'react'
import table from './tables.json'
import { db } from './firebase-config'
import { collection, getDocs, addDoc } from 'firebase/firestore'
import { createData } from './components/CRUD/CRUD'

function CreateTable() {

  const tableName = "Mental Health" //change table here

  const apptCollectionRef = collection(db, tableName)

  const createUser = async () => {
    for (const Data of table[tableName]) {
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