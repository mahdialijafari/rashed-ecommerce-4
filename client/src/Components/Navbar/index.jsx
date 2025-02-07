import { Badge, Box, Button, Divider, FormControl, Input, InputAdornment, InputLabel, Stack, TextField, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../Store/Slices/AuthSlice";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { changeTheme } from "../../Store/Slices/ThemeSlice";
import fetchData from "../../Utils/fetchData";
import SearchResult from "./SearchResult";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#aab4be',
        ...theme.applyStyles('dark', {
          backgroundColor: '#8796A5',
        }),
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: '#001e3c',
    width: 32,
    height: 32,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
    ...theme.applyStyles('dark', {
      backgroundColor: '#003892',
    }),
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#aab4be',
    borderRadius: 20 / 2,
    ...theme.applyStyles('dark', {
      backgroundColor: '#8796A5',
    }),
  },
}));
export default function Navbar() {
  const theme = useTheme();
  const [searchResult,setSearchResult]=useState()
  const [searchInp,setSearchInp]=useState()


  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const cartLength=useSelector(state=>state.cart.items).length
  const handleSearch=async(e)=>{
    setSearchInp(e.target.value)
    const response=await fetchData('search',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify({query:e.target.value})
    })
    setSearchResult(response.data)
  }
  useEffect(()=>{
    window.addEventListener('click',(e)=>{
      if(!e.target.closest('.searchInp')){
        setSearchInp('')
        setSearchResult('')
      }
    })
  },[])
  const catItem=searchResult?.category?.map((e,index)=><SearchResult id={e._id} img={e.image[0]} title={e.title} type={'category'} key={index}/>)
  const porItem=searchResult?.product?.map((e,index)=><SearchResult id={e._id} img={e.images[0]} title={e.name} type={'product'} key={index}/>)
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
      <Stack flexDirection={"row"} alignItems={'center'} height={'100%'}>
      <FormControlLabel
        control={<MaterialUISwitch onClick={()=>dispatch(changeTheme())} sx={{ m: 1 }} defaultChecked />}
      />
        <Typography
          component={"h1"}
          sx={{ fontSize: "24px",lineHeight:'80px', color: theme.palette.text.secondary }}
        >
          Rashed
        </Typography>
        <Button
          variant="text"
          onClick={() => navigate("/")}
          sx={{ color: "white" }}
        >
          Home
        </Button>
        <Button
          variant="text"
          onClick={() => navigate("/products/all/all-category")}
          sx={{ color: "white" }}
        >
          Products
        </Button>
        <Button
          variant="text"
          onClick={() => navigate("/about")}
          sx={{ color: "white" }}
        >
          About Us
        </Button>
        {token ? (
          <Button
            variant="contained"
            onClick={() => dispatch(logout())}
            color="error"
            
            sx={{height:'50%',margin:'0 20px'}}
          >
            Logout
          </Button>
        ) : (
          <Button
            variant="text"
            onClick={() => navigate("/auth")}
            sx={{ color: "white" }}
          >
            Login/Register
          </Button>
        )}
      </Stack>
      <Stack height={'100%'} flexDirection={"row"} gap={'10px'} alignItems={'center'}>
      <Box width={'300px'} sx={{position:'relative'}}>
      <FormControl variant="standard " className="searchInp" sx={{width:'100%'}}>
        <InputLabel htmlFor="input-with-icon-adornment">
          Search
        </InputLabel>
        <Input
          onChange={handleSearch}
          value={searchInp}
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </FormControl>
      <Stack sx={{
        position:'absolute',
        width:'100%',
        height:searchInp?'400px':'0px',
        borderRadius:'0 0 5px 5px',
        overflowY:'scroll',
        backgroundColor:'white',
        zIndex:'1000',
        transition:'all .5s'
      }}>
        <Typography variant="body1" textAlign={'center'}>Categories</Typography>
        {catItem}
        <Divider/>
        <Typography variant="body1" textAlign={'center'}>Products</Typography>

        {porItem}
      </Stack>
      </Box>

        <Link to={'/cart'}>
          <Badge badgeContent={cartLength} color="primary">
              <ShoppingCartIcon sx={{color:'white'}}/>
          </Badge>
        </Link>
        {token && (
          <Link to={"/profile"}>
            <AccountCircleIcon sx={{color:'white'}} />
          </Link>
        )}
      </Stack>
    </Stack>
  );
}
