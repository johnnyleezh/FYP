import * as React from 'react';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ControllableStates({ user, data, selectedProfile, sx, label, getProfile }) {
  const [value, setValue] = React.useState(null);
  const [inputValue, setInputValue] = React.useState('');

  const customFilterOptions = (options, params) => {
    const filtered = options.filter((option) =>
      (option.userId + " - " + option.name).toLowerCase().includes(params.inputValue.toLowerCase())
    );
    return filtered.slice(0, 3); // Limit results to 3
  };

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
          filterOptions={customFilterOptions}
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
    );
  } else {
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
          filterOptions={customFilterOptions}
          getOptionLabel={(userOption) => userOption.userId + " - " + userOption.name}
          renderInput={(params) => <TextField {...params} label={label} placeholder={label} />}
        />
      </div>
    );
  }
}
