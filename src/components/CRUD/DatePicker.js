import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// Functional component to display a DatePicker with a specified value
export default function DatePickerValue({ sx, label, date, onChange }) {
    // State to store the selected date value
    const [value, setValue] = React.useState(date ? dayjs(date, 'DD/MM/YYYY') : null);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            {/* DatePicker component */}
            <DatePicker
                disablePast // Disable selecting past dates
                sx={sx} // Styling
                label={label} // Label for the input
                value={value} // Selected date value
                onChange={(e) => onChange(e)} // Handle date change
                format={'DD/MM/YYYY'} // Display format for the date
            />
        </LocalizationProvider>
    );
}
