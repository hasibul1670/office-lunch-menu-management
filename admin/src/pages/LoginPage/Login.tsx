/* eslint-disable @typescript-eslint/no-explicit-any */
{
  /* <div className="w-1/8 mb-10 md:mb-0 mx-auto">
  <Lottie animationData={login} loop={true} />
</div>; */
}

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useLoginUserMutation } from "../../redux/features/auth/authApi";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://hasibul-islam365.netlify.app/">
        Hasibul Islam
      </Link>
    </Typography>
  );
}
const defaultTheme = createTheme();

export default function LogIn() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.path || "/";

  const [loginUser] = useLoginUserMutation();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const payload = {
      email: data.get("email"),
      password: data.get("password"),
    };

    const res: any = await loginUser({ data: payload });
    const token = res.data.data.accessToken;
    const email = res.data.data.email;
    const role = res.data?.data?.role;
    const userId = res.data?.data?.userId;
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
    localStorage.setItem("role", role);
    localStorage.setItem("userId", userId);

    if (res.data?.statusCode === 200) {
      Swal.fire({
        position: "top",
        icon: "success",
        title: "User logged in successfully.",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from, { replace: true });
    } else {
      Swal.fire({
        position: "top",
        icon: "error",
        title: res.error.message, // Assuming `error` is part of `res`
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
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
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
