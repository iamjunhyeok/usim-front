import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";

import { Link } from "react-router-dom";
import DateRangeSearch from "./DateRangeSearch";

export default function Join() {
  const [request, setRequest] = useState(false);
  const handleRequest = () => {
    setRequest(true);
  };
  const [cert, setCert] = useState(false);
  const handleCert = () => {
    setCert(true);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
            margin="normal"
            autoComplete="given-name"
            name="firstName"
            required
            fullWidth
            id="firstName"
            label="이메일"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="비밀번호"
            name="lastName"
            autoComplete="family-name"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="비밀번호 확인"
            name="email"
            autoComplete="email"
          />
          <TextField
            margin="normal"
            autoComplete="given-name"
            name="firstName"
            required
            fullWidth
            id="firstName"
            label="이름"
          />

          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="핸드폰 번호"
            id="password"
            autoComplete="new-password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    type="submit"
                    disableElevation
                    onClick={handleRequest}
                    disabled={cert}
                  >
                    인증 요청
                  </Button>
                </InputAdornment>
              ),
            }}
            disabled={cert}
          />

          {request && !cert && (
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="인증 코드"
              type="password"
              id="password"
              autoComplete="new-password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button type="submit" disableElevation onClick={handleCert}>
                      확인
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2 }}
            size="large"
          >
            회원 가입
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
