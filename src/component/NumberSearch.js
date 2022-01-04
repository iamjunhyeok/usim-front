import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import axios from "axios";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function NumberSearch() {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    axios
      .get("http://192.168.0.24:8080/mapping")
      .then((response) => {
        setOptions(response.data);
      })
      .catch((error) => {});
  }, []);

  const handleChange = (event) => {
    console.log(event);
  };

  return (
    <Autocomplete
      id="asynchronous-demo"
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) =>
        option.SERVICE_NUMBER === value.SERVICE_NUMBER
      }
      getOptionLabel={(option) =>
        `바코드 번호: ${option.BAR_CODE_NUMBER} / 서비스 번호: ${option.SERVICE_NUMBER}`
      }
      options={options}
      renderInput={(params) => (
        <TextField
          {...params}
          label="바코드 번호/서비스 번호"
          margin="normal"
        />
      )}
      fullWidth
      onChange={handleChange}
    />
  );
}
