import React, { useState } from 'react';
import '../Session/SessionHistory.css'
import SessionHistoryRow from '../Session/SessionHistoryRow'


function SessionHistory() {
    return (
        <div>
            <h1 className="sessionTitle">Session History</h1>
            <div className="sessionHistoryContainer">
                <div className="sessionHistoryHeader">
                    <div className="sessionHistoryColumn" style={{ flex: 1 }}>
                        <p className="header">Date</p>
                    </div>
                    <div className="sessionHistoryColumn" style={{ flex: 3 }}>
                        <p className="header">Title</p>
                    </div>
                    <div className="sessionHistoryColumn" style={{ flex: 1 }}>
                        <p className="header">Score</p>
                    </div>
                </div>

                <SessionHistoryRow
                    date='01/03/2023'
                    title='Diagnosed with depression'
                    score='63%'
                    counsellor='Dr Yao Ming'
                    description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
                deserunt corrupti, ut fugit magni qui quasi nisi amet repellendus non
                fuga omnis a sed impedit explicabo accusantium nihil doloremque
                consequuntur.'
                />
                <SessionHistoryRow
                    date='02/02/2023'
                    title='Follow up session'
                    score='46%'
                    counsellor='Dr Yao Ming'
                    description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
                deserunt corrupti, ut fugit magni qui quasi nisi amet repellendus non
                fuga omnis a sed impedit explicabo accusantium nihil doloremque
                consequuntur.'
                />
                <SessionHistoryRow
                    date='01/01/2023'
                    title='Traumatic recovery therapy'
                    score='27%'
                    counsellor='Dr Yao Ming'
                    description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
                deserunt corrupti, ut fugit magni qui quasi nisi amet repellendus non
                fuga omnis a sed impedit explicabo accusantium nihil doloremque
                consequuntur.'
                />

            </div>
        </div>
    )
}

export default SessionHistory