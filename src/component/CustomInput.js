import React from "react";
import TextField from "@mui/material/TextField";

export default function CustomInput({children}) {
  return (
    <TextField
      id="outlined-basic"
      label={children}
      variant="outlined"
      fullWidth
      margin="normal"
    />
  );
}
