import React, { useRef } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import { readSpecificUserData } from "./CRUD";
import { useState } from "react";

export default function ControllableStates({
  user,
  data,
  selectedProfile,
  sx,
  label,
  getProfile,
}) {
  const [value, setValue] = React.useState(null);
  const [inputValue, setInputValue] = React.useState("");
  const inputRef = useRef();

  const customFilterOptions = (options, params) => {
    const filtered = options.filter((option) =>
      (option.userId + " - " + option.name)
        .toLowerCase()
        .includes(params.inputValue.toLowerCase())
    );
    return filtered.slice(0, 3); // Limit results to 3
  };

  // if (getProfile) {
  //   return (
  //     <div>
  //       <Autocomplete
  //         value={value}
  //         onChange={(event, newValue) => {
  //           setValue(newValue);
  //           selectedProfile(newValue);
  //         }}
  //         inputValue={inputValue}
  //         onInputChange={(event, newInputValue) => {
  //           setInputValue(newInputValue);
  //         }}
  //         id="controllable-states-demo"
  //         options={data}
  //         sx={sx}
  //         filterOptions={customFilterOptions}
  //         getOptionLabel={(userOption) => userOption.userId + " - " + userOption.name}
  //         renderInput={(params) => (
  //           <TextField {...params} label={label} placeholder={label} />
  //         )}
  //         renderOption={(props, option) => (
  //           <Link to={`/profile?uniqueId=${option.uniqueId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
  //             <li {...props}>
  //               {option.userId} - {option.name}
  //             </li>
  //           </Link>
  //         )}
  //       />
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div>
  //       <Autocomplete
  //         value={value}
  //         onChange={(event, newValue) => {
  //           setValue(newValue);
  //           selectedProfile(newValue);
  //         }}
  //         inputValue={inputValue}
  //         onInputChange={(event, newInputValue) => {
  //           setInputValue(newInputValue);
  //         }}
  //         id="controllable-states-demo"
  //         options={data}
  //         sx={sx}
  //         filterOptions={customFilterOptions}
  //         getOptionLabel={(userOption) => userOption.userId + " - " + userOption.name}
  //         renderInput={(params) => <TextField {...params} label={label} placeholder={label} />}
  //       />
  //     </div>
  //   );
  // }
  const handleKeyPress = async (event) => {
    if (event.key === "Enter") {
      const fetchUniqueId = await readSpecificUserData(
        "User",
        inputRef.current.value
      );
      if (fetchUniqueId) {
        event.preventDefault();
        window.location.href = `/profile?uniqueId=${fetchUniqueId.uniqueId}`;
      }
    }
  };

  if (getProfile) {
    return (
      <div>
        <Box
          component="form"
          sx={{
            "& > :not(style)": {},
          }}
          noValidate
          autoComplete="off"
          fullWidth
          onKeyPress={handleKeyPress}
        >
          <TextField
            fullWidth
            id="outlined-basic"
            label="Student ID"
            variant="outlined"
            sx={sx}
            inputRef={inputRef}
          />
        </Box>
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
          getOptionLabel={(userOption) =>
            userOption.userId + " - " + userOption.name
          }
          renderInput={(params) => (
            <TextField {...params} label={label} placeholder={label} />
          )}
        />
      </div>
    );
  }
}
