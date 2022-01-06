import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import axios from "axios";

export default function AgencySearch() {
  const [items, setItems] = useState(null);
  useEffect(() => {
    axios
      .get("http://192.168.0.52:8080/agency")
      .then((response) => {
        console.log(response.data);
        setItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [agency, setAgency] = useState(null);
  const handleChange = (event) => {
    setAgency(event.target.value);
  };

  if (!items) return <div>로딩 중...</div>;

  return (
    <FormControl fullWidth margin="normal">
      <InputLabel id="demo-simple-select-label">대리점</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={agency}
        label="대리점"
        onChange={handleChange}
      >
        {items.map((item) => (
          <MenuItem value={item.AGENCY}>{item.AGENCY_NAME}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
