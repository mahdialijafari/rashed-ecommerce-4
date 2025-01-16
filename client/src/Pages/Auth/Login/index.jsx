import React from "react";
import fetchData from "../../../Utils/fetchData";
import useFormFields from "../../../Utils/useFormFields";
import notify from "../../../Utils/notify";
import { useDispatch } from "react-redux";
import { login } from "../../../Store/Slices/AuthSlice";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Link,
  Paper,
} from "@mui/material";
import { styled } from "@mui/system";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: 400,
  width: "100%",
  textAlign: "center",
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

const GradientButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(45deg, #2196F3 30%, #9C27B0 90%)",
  color: "white",
  width: "100%",
  padding: theme.spacing(1.5),
  marginTop: theme.spacing(2),
}));

const Login = ({ handlePageType }) => {
  const [fields, handleChange] = useFormFields({});
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetchData("auth/signin", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(fields),
    });
    if (res.success) {
      notify("success", res.message);
      dispatch(login({token:res.data.token,user:res.data.user}));
    } else {
      notify("error", res.message);
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{
        background: "linear-gradient(45deg, #2196F3 30%, #9C27B0 90%)",
      }}
    >
      <Container sx={{display:'flex',alignItems:'center !important',justifyContent:'center'}} maxWidth="sm">
        <StyledPaper elevation={3}>
          {/* Form Header */}
          <Typography variant="h4" component="h1" gutterBottom>
            Welcome Back
          </Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            Please login to your account.
          </Typography>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Username */}
            <TextField
              fullWidth
              id="username"
              name="username"
              label="Username"
              variant="outlined"
              margin="normal"
              onChange={handleChange}
              placeholder="Enter your username"
            />

            {/* Password */}
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              onChange={handleChange}
              placeholder="Enter your password"
            />

            {/* Submit Button */}
            <GradientButton type="submit" variant="contained">
              Login
            </GradientButton>
          </form>

          {/* Footer */}
          <Box mt={3}>
            <Typography variant="body2" color="textSecondary">
              Don’t have an account?{" "}
              <Link
                component="button"
                variant="body2"
                onClick={handlePageType}
                sx={{ color: "primary.main", fontWeight: "medium" }}
              >
                Sign Up
              </Link>
            </Typography>
          </Box>
        </StyledPaper>
      </Container>
    </Box>
  );
};

export default Login;