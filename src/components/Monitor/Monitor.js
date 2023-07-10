import React from 'react';
import '../../App.css';
import { Button } from '../Button';
import './Monitor.css';
import MonitorRow from './MonitorRow';

function Monitor() {
    return (
        <div class="contentContainer">
            <h1 className="monitorTitle">Monitor List</h1>
            <div className="searchBarMonitor">Enter here...</div>
            <MonitorRow address='students' profilePic='/images/jingyuan.webp' name='Johnny' 
            studentId='1800795' course='Software Engineering' trimester='Y5S2' 
            atttendance='83' mentalHealth='63' />
            <MonitorRow />

            <MonitorRow />
        </div>
    );
}

export default Monitor;
