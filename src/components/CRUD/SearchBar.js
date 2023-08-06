import * as React from 'react';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const options = [
  { name: 'Option 1', id: 0 },
  { name: 'Option 2', id: 1 },
];

export default function ControllableStates({ user, data, selectedProfile, sx, label, getProfile }) {
  const [value, setValue] = React.useState(null); // Change initial value to null
  const [inputValue, setInputValue] = React.useState('');

  if (getProfile) {
    return (
      <div>
        <Autocomplete
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            selectedProfile(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          id="controllable-states-demo"
          options={data}
          sx={sx}
          getOptionLabel={(userOption) => userOption.userId + " - " + userOption.name}
          renderInput={(params) => (
            <TextField {...params} label={label} placeholder={label} />
          )}
          renderOption={(props, option) => (
            <Link to={`/profile?uniqueId=${option.uniqueId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <li {...props}>
                {option.userId} - {option.name}
              </li>
            </Link>
          )}
        />
      </div>


    )
  }
  else {
    return (
      <div>
        <Autocomplete
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            selectedProfile(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          id="controllable-states-demo"
          options={data}
          sx={sx}
          getOptionLabel={(userOption) => userOption.userId + " - " + userOption.name}
          renderInput={(params) => <TextField {...params} label={label} placeholder={label} />}
        />
      </div>
    );
  }
}
