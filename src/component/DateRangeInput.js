import React, { useState } from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TextField from "@mui/material/TextField";
import DatePicker from "@mui/lab/DatePicker";
import koLocale from "date-fns/locale/ko";

export default function DateRangeSearch() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={koLocale}>
      <DatePicker
        label="시작일"
        value={startDate}
        onChange={(newValue) => {
          setStartDate(newValue);
        }}
        renderInput={(params) => (
          <TextField {...params} fullWidth margin="normal" />
        )}
      />
      <DatePicker
        label="종료일"
        value={endDate}
        onChange={(newValue) => {
          setEndDate(newValue);
        }}
        renderInput={(params) => (
          <TextField {...params} fullWidth margin="normal" />
        )}
      />
    </LocalizationProvider>
  );
}
