import React, { useState, useEffect } from 'react';
import '../../App.css';
import { Button } from '../Button';
import MonitorRow from '../Monitor/MonitorRow';
import { readData } from '../CRUD/CRUD';

function StudentList() {

    const [mentalHealth, setMentalHealth] = useState([])
    const [list, setList] = useState([])

    const fetchData = async () => {
        const fetchData = await readData("User", "role", "student");
        setList(fetchData)
    };

    useEffect(() => {
        fetchData();
    }, []);

    const monitorRowDisplay = () => {
        const row = [];
        for (let i = 0; i < list.length; i++) {
            row.push(
                <MonitorRow
                    isOpen={true}
                    detail={list[i]}
                    mental={(e) => { setMentalHealth(e) }}
                />
            )
        }
        return row
    }

    return (
        <div class="contentContainer">
            <div className="searchBarMonitor" style={{ marginTop: "1rem" }}>
                <input
                    type="text"
                    name="fname"
                    placeholder="Enter here..."
                    style={{ width: "100%", border: 'none' }}
                ></input></div>
            {monitorRowDisplay()}
        </div>
    );
}

export default StudentList;
