import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Paper,
  Grid,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import fetchData from "../../Utils/fetchData";
import notify from "../../Utils/notify";
import { login, logout } from "../../Store/Slices/AuthSlice";

const Profile = () => {
  // State for user profile data
  const {_id,username,email}=useSelector(state=>state.auth.user)
  const {token}=useSelector(state=>state.auth)
  const [profile, setProfile] = useState({
    username,
    email,
  });
  const dispatch=useDispatch()
  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async(e) => {
    e.preventDefault();
    const response=await fetchData(`user/${_id}`,{
      method:"PATCH",
      headers:{
        'content-type':'application/json',
        'authorization':`Brear ${token}`
      },
      body:JSON.stringify(profile)
    })
    if(response.success){
      notify('success','update successfully')
      dispatch(login({token,user:response.data}))
      dispatch(logout())
    }else{
      notify('error','update failed')
    }
  };

  // Handle account removal
  const handleRemoveAccount = async(e) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to delete your account?")) {    
      const response=await fetchData(`user/${_id}`,{
        method:"DELETE",
        headers:{
          'content-type':'application/json',
          'authorization':`Brear ${token}`
        }
      })
      if(response.success){
        notify('success',response.message)
      }else{
        notify('error','update failed')
      }
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 4, borderRadius: 2 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Profile Page
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Username"
                name="username"
                value={profile.username}
                onChange={handleInputChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={profile.email}
                onChange={handleInputChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
                size="large"
              >
                Update Profile
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                color="error"
                size="large"
                onClick={handleRemoveAccount}
              >
                Remove Account
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default Profile;