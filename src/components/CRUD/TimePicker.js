import React from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

export default function TimePickerValue({ sx, selectedTime, label, time, onChange }) {
    // Convert the provided time string to a dayjs object, or set to null if not provided
    const [value, setValue] = React.useState(time ? dayjs(time, 'h:mm A') : null);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            {/* Render the TimePicker component */}
            <TimePicker
                sx={sx}
                label={label}
                value={value}
                onChange={(e) => onChange(e)} // Pass the change event to the onChange handler
            />
        </LocalizationProvider>
    );
}
