import { db } from '../../firebase-config';
import {
    collection,
    addDoc,
    getDocs,
    updateDoc,
    deleteDoc,
    doc,
    query,
    where,
} from 'firebase/firestore';

// Function to create data in the specified table
const createData = async (table, obtainedData) => {
    const createDataRef = collection(db, table);
    await addDoc(createDataRef, obtainedData);

    console.log('Create Data Complete!\n', obtainedData);
};

// Function to read data from the specified table and column
const readData = async (table, column, uniqueId) => {
    const readDataRef = collection(db, table);
    const q = query(readDataRef, where(column, '==', uniqueId));
    const data = await getDocs(q);

    if (!data.empty) {
        const dataMap = data.docs.map((doc) => ({ ...doc.data(), uniqueId: doc.id }));
        return dataMap;
    } else {
        return null;
    }
};

// Function to read specific data based on uniqueId
const readSpecificData = async (table, uniqueId) => {
    const readDataRef = collection(db, table);
    const q = query(readDataRef);
    const data = await getDocs(q);

    if (!data.empty) {
        const dataMap = data.docs.map((doc) => ({ ...doc.data(), uniqueId: doc.id }));
        const foundData = dataMap.find((item) => item.uniqueId === uniqueId);

        if (!foundData) {
            return null;
        } else {
            return foundData;
        }
    } else {
        return null;
    }
};

// Function to read all data from a table
const readTableData = async (table) => {
    try {
        const readDataRef = collection(db, table);
        const data = await getDocs(readDataRef);

        if (!data.empty) {
            const dataMap = data.docs.map((doc) => ({ ...doc.data(), uniqueId: doc.id }));
            return dataMap;
        } else {
            return null;
        }
    } catch (error) {
        return null;
    }
};

// Function to update data in a specific row
const updateData = async (table, uniqueId, data) => {
    const specificRow = doc(db, table, uniqueId);
    await updateDoc(specificRow, data);

    console.log('Update Data Complete!\n', data);
};

// Function to delete data from a specific row
const deleteData = async (table, uniqueId) => {
  try {
    const specificRow = doc(db, table, uniqueId);
    await deleteDoc(specificRow);
    console.log('Delete Data Complete!\n', specificRow);
    return { success: true };
  } catch (error) {
    console.log('Error deleting data:', error);
    return { success: false };
  }
};


export {
    createData,
    readData,
    updateData,
    deleteData,
    readSpecificData,
    readTableData,
};
