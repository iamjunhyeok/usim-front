import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import InputAdornment from "@mui/material/InputAdornment";

import { useFormik } from "formik";
import * as yup from "yup";

export default function Join() {
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("이메일 형식이 아님")
      .required("이메일이 입력되지 않음"),
    password: yup.string().required("비밀번호가 입력되지 않음"),
    passwordConfirmation: yup
      .string()
      .required("비밀번호 확인이 입력되지 않음")
      .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않음"),
    name: yup
      .string()
      .matches(/^[aA-zZ\s]+$/, "문자만 입력할 수 있음")
      .required("이름이 입력되지 않음"),
    phoneNumber: yup
      .number()
      .typeError("숫자만 입력할 수 있음")
      .required("핸드폰 번호가 입력되지 않음"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirmation: "",
      name: "",
      phoneNumber: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const [request, setRequest] = useState(false);
  const handleRequest = () => {
    setRequest(true);
  };
  const [cert, setCert] = useState(false);
  const handleCert = () => {
    setCert(true);
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          회원 등록
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={formik.handleSubmit}
          sx={{ mt: 3 }}
        >
          <TextField
            margin="normal"
            name="email"
            fullWidth
            id="email"
            label="이메일"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            margin="normal"
            fullWidth
            id="password"
            label="비밀번호"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <TextField
            margin="normal"
            fullWidth
            id="passwordConfirmation"
            label="비밀번호 확인"
            name="passwordConfirmation"
            value={formik.values.passwordConfirmation}
            onChange={formik.handleChange}
            error={
              formik.touched.passwordConfirmation &&
              Boolean(formik.errors.passwordConfirmation)
            }
            helperText={
              formik.touched.passwordConfirmation &&
              formik.errors.passwordConfirmation
            }
          />
          <TextField
            margin="normal"
            name="name"
            fullWidth
            id="name"
            label="이름"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />

          <TextField
            margin="normal"
            fullWidth
            name="phoneNumber"
            label="핸드폰 번호"
            id="phoneNumber"
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
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            error={
              formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
            }
            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
          />
          {request && !cert && (
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="인증 코드"
              type="password"
              id="password"
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
            회원 등록
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
