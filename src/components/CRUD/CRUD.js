import { db } from '../../firebase-config'
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, query, where, } from 'firebase/firestore'

const createData = async (table, obtainedData) => {
    const createDataRef = collection(db, table) //table = "Users"/"Appointment"
    await addDoc(createDataRef, obtainedData);

    console.log("Create Data Complete!\n" + obtainedData)
}

const readData = async (table, column, uniqueId) => {
    const readDataRef = collection(db, table);
    const q = query(readDataRef, where(column, "==", uniqueId));
    const data = await getDocs(q);

    if (!data.empty) {
        const dataMap = data.docs.map((doc) => ({ ...doc.data(), uniqueId: doc.id }));
        console.log("Read Data from " + table + " Complete!\n", dataMap);
        return dataMap
    } else {
        console.log("No data found for table =", table);
    }
    console.log(data)
};

const readSpecificData = async (table, uniqueId) => {
    const readDataRef = collection(db, table);
    const q = query(readDataRef);
    const data = await getDocs(q);

    if (!data.empty) {
        const dataMap = data.docs.map((doc) => ({ ...doc.data(), uniqueId: doc.id }));
        const foundData = dataMap.find((item) => item.uniqueId === uniqueId);

        if (!foundData) {
            console.log("No data found for uniqueId = " + uniqueId + " for " + table);
        } else {
            console.log("Read Data with Where from " + table + " Complete!\n", foundData);
            return foundData
        }
    } else {
        console.log("No data found for table =", table);
    }
    console.log(data);
};

const updateData = async (table, uniqueId, data) => {
    const specificRow = doc(db, table, uniqueId);
    await updateDoc(specificRow, data);

    // const data={field: oof} //data need to pass in object

    console.log("Update Data Complete!\n" + data);
};

const deleteData = async (table, uniqueId) => {
    const specificRow = doc(db, table, uniqueId);
    await deleteDoc(specificRow)


    console.log("Delete Data Complete!\n" + specificRow);
}

export { createData, readData, updateData, deleteData, readSpecificData };
