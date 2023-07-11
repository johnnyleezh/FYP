import React from 'react';
import '../../App.css';
import { Button } from '../Button';
import './MonitorList.css';
import MonitorRow from './MonitorRow';

function Monitor() {
    return (
        <div class="contentContainer">
            <h1 className="monitorTitle">Monitor List</h1>
            <div className="searchBarMonitor">Enter here...</div>
            <MonitorRow 
            profilePic='/images/jingyuan.webp' 
            name='Johnny' 
            studentId='1800795' 
            course='Software Engineering' 
            trimester='Y5S2' 
            atttendance='83' 
            mentalHealth='63'
            address='/profile'
            appt='01/02/2023'
            lastTested='02/03/2022'
            />
            <MonitorRow />

            <MonitorRow />
            <MonitorRow />
        </div>
    );
}

export default Monitor;
