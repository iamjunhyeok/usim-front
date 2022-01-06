import React from "react";
import Button from "@mui/material/Button";

export default function CustomButton({ props, children }) {
  return <Button {...props}>{children}</Button>;
}
