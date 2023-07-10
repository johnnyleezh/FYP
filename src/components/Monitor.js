import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Monitor.css';

function Monitor() {
    return (
        <div class="contentContainer">
            <div class="rowContainer">
                <div className="columnContainer">
                <img src="/images/background.png" className="photo" alt="Student Photo" width="70%" height="90%"></img>
                </div>
                <div className="columnMiddleContainer">
                    Middle
                </div>
                <div className="columnContainer">
                    Right
                </div>
            </div>
        </div>
    );
}

export default Monitor;
