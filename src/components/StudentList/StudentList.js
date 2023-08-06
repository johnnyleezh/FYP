import React, { useState, useEffect } from 'react';
import '../../App.css';
import { Button } from '../Button';
import MonitorRow from '../Monitor/MonitorRow';
import { readData } from '../CRUD/CRUD';
import SearchBar from '../CRUD/SearchBar';
import { Link } from 'react-router-dom';

function StudentList({ user }) {

    const [studentList, setStudentList] = useState([]);
    const [mentalHealth, setMentalHealth] = useState([])
    const [list, setList] = useState([])

    const fetchData = async () => {
        const fetchData = await readData("User", "role", "student");
        setList(fetchData)
    };
    const obtainStudentList = async () => {
        const list = await readData('User', 'role', 'student')
        if (list) {
            setStudentList(list)
        }
    }
    const obtainedProfile = (value) => {
        if (value) {
            // <Link style={{ textDecoration: "none", color: "inherit" }}
            //     to={{
            //         pathname: '/profile',
            //         search: `?uniqueId=${value.uniqueId}`
            //     }}
            //     onDragStart={(e) => { e.preventDefault(); }}
            // ></Link>
        }
    };
    useEffect(() => {
        fetchData();
        obtainStudentList();
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
        <div style={{ width: "95%", backgroundColor: '#F4976C', margin: '0rem auto 1rem auto', boxShadow: '0px 5px 10px 0px rgba(0,0,0,0.75)' }}>
            <div class="contentContainer">
                <div className="searchBarMonitor">
                    <SearchBar
                        sx={{
                            width: "100%",
                            border: 'none',
                            fontSize: '1.3rem',
                            backgroundColor: 'white',
                        }}
                        label={user.role === 'counsellor' ? 'Student ID/Name' : 'Counsellor ID/Name'}
                        user={user}
                        data={studentList}
                        selectedProfile={(e) => obtainedProfile(e)}
                        getProfile={true}
                    />
                </div>
                {monitorRowDisplay()}
            </div>
        </div>
    );
}

export default StudentList;
