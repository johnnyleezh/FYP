import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DatePickerValue({ sx, label, date, onChange }) {
    const [value, setValue] = React.useState(date ? dayjs(date, 'DD/MM/YYYY') : null);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker', 'DatePicker']}>
                <DatePicker
                    sx={sx}
                    label={label}
                    value={value}
                    onChange={(e) => onChange(e)}
                    format={'DD/MM/YYYY'}
                />
            </DemoContainer>
        </LocalizationProvider>
    );
}
