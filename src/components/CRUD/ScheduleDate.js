import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { readData } from './CRUD';

// AutocompleteDatePicker component
function AutocompleteDatePicker(props) {
    const { options, counsellorId, ...other } = props;
    const [dates, setDates] = useState([]);

    // Fetch schedule data for the given counsellor
    const fetchData = async () => {
        try {
            const data = await readData("Schedule", "userId", counsellorId);
            if (data) {
                setDates(data); // Update the state with fetched data
            } else {
                setDates([]);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [counsellorId]); // Trigger fetchData when counsellorId changes

    // Generate week options based on fetched schedule dates
    const generateWeekOptions = () => {
        const startOfWeek = dayjs().startOf('week');
        const weekOptions = [];
        for (let i = 0; i < 4; i++) {
            for (const date of dates) {
                weekOptions.push(
                    startOfWeek.add(i, 'week').add(parseInt(date.day), 'day').startOf('day')
                );
            }
        }

        return weekOptions;
    };

    // Create an options lookup object to disable certain dates
    const optionsLookup = React.useMemo(
        () =>
            generateWeekOptions().reduce((acc, option) => {
                acc[option.toISOString()] = true;
                return acc;
            }, {}),
        [dates, counsellorId], // Include counsellorId as a dependency
    );

    return (
        <DatePicker
            format="DD/MM/YYYY" // Set the desired format
            disableCloseOnSelect
            clearable
            value={null}
            shouldDisableDate={(date) => !optionsLookup[date.startOf('day').toISOString()]}
            {...other}
        />
    );
}

// PickerWithAutocompleteField component
export default function PickerWithAutocompleteField({ counsellorId, sx, onChange }) {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <AutocompleteDatePicker
                onChange={(e) => onChange(e)}
                sx={sx}
                label="Pick a date"
                disablePast
                counsellorId={counsellorId}
            />
        </LocalizationProvider>
    );
}
