import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { readData } from './CRUD';

function TimeAutoComplete({ counsellorId, day, selectedTime, sx, label }) {
    const [value, setValue] = React.useState(null);
    const [inputValue, setInputValue] = React.useState('');
    const [times, setTimes] = useState([]);

    // Define a mapping of day names to numeric day indexes
    const daysMap = {
        Sunday: 0,
        Monday: 1,
        Tuesday: 2,
        Wednesday: 3,
        Thursday: 4,
        Friday: 5,
        Saturday: 6,
    };

    const fetchData = async () => {
        try {
            // Fetch schedule data for the specified counsellor
            const dates = await readData('Schedule', 'userId', counsellorId);

            if (day !== null) {
                const numericDay = daysMap[day]; // Convert 'dddd' to numeric day index
                // Filter times based on the selected day
                const filteredTimes = dates.filter((obj) => obj.day === String(numericDay));
                if (filteredTimes.length > 0) {
                    setTimes(filteredTimes);
                } else {
                    setTimes([]);
                }
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [counsellorId, day]); // Fetch data when counsellorId or day changes

    return (
        <div>
            <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                    if (newValue) { selectedTime(newValue); }
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                id="controllable-states-demo"
                options={times}
                sx={sx}
                getOptionLabel={(userOption) => userOption.time}
                renderInput={(params) => <TextField {...params} label={label} placeholder={label} />}
            />
        </div>
    );
}

export default TimeAutoComplete;
