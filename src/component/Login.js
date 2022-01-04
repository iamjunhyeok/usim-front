import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";

export default function Login() {
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
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LoginIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          로그인
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            fullWidth
            id="email"
            label="이메일"
            name="email"
            autoComplete="email"
          />
          <TextField
            margin="normal"
            fullWidth
            name="password"
            label="비밀번호"
            type="password"
            id="password"
            autoComplete="password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            sx={{ mt: 2 }}
          >
            로그인
          </Button>
          <Grid container>
            <Grid item>
              <Link to="/join">계정이 없으신가요?</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
