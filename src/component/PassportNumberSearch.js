import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function PassportNumberSearch() {
  return (
    <TextField
      id="outlined-basic"
      label="여권 번호"
      variant="outlined"
      fullWidth
      margin="normal"
    />
  );
}
