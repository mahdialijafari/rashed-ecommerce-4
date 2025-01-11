import { Badge, Button, FormControl, Input, InputAdornment, InputLabel, TextField, Typography } from "@mui/material";
import { Box, Stack, useTheme } from "@mui/system";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../Store/Slices/AuthSlice";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';


export default function Navbar() {
  const theme = useTheme();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const cartLength=useSelector(state=>state.cart.items).length
  return (
    <Stack
      component={"nav"}
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{
        padding: "0 5%",
        backgroundColor: theme.palette.primary.main,
        height: "80px",
      }}
    >
      <Stack flexDirection={"row"} height={'100%'}>
        <Typography
          component={"h1"}
          sx={{ fontSize: "24px", lineHeight:'80px', color: theme.palette.text.primary }}
        >
          Rashed
        </Typography>
        <Button
          variant="text"
          sx={{ color: "white" }}
          onClick={() => navigate("/")}
        >
          Home
        </Button>
        <Button
          variant="text"
          sx={{ color: "white" }}
          onClick={() => navigate("/product")}
        >
          Product
        </Button>
        <Button
          variant="text"
          sx={{ color: "white" }}
          onClick={() => navigate("/about")}
        >
          About
        </Button>
        {token ? (
          <Button
            variant="contained"
            color="error"
            onClick={() => dispatch(logout)}
          >
            Logout
          </Button>
        ) : (
          <Button
            variant="text"
            sx={{ color: "white" }}
            onClick={() => navigate("/auth")}
          >
            Login/Register
          </Button>
        )}
      </Stack>
      <Stack height={'100%'} flexDirection={"row"} gap={'10px'} alignItems={'center'}>
      <Box width={'300px'}>
      <FormControl sx={{width:'100%'}}>
        <InputLabel htmlFor="input-with-icon-adornment">
          Search
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </FormControl>
      </Box>
        <Link to={'/cart'}>
          <Badge badgeContent={cartLength} color="primary">
            <ShoppingCartIcon sx={{color:'white'}} />
          </Badge>
        </Link>
        {token && (
          <Link to={"/profile"}>
            <AccountCircleIcon sx={{color:'white'}}/>
          </Link>
        )}
      </Stack>
    </Stack>
  );
}
