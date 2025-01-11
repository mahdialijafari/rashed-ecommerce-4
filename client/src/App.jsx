import React from "react";
import { Navbar, Footer } from "./Components";
import {
  About,
  Auth,
  Home,
  NotFound,
  Product,
  ProductDetails,
  Profile,
} from "./Pages";
import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";

export default function App() {
  const { mode } = useSelector((state) => state.theme);
  const { token } = useSelector((state) => state.auth);
  return (
    <>
      <ThemeProvider theme={mode}>
        <CssBaseline />
        <Navbar />
        <Box component={'main'} minHeight={'80vh'}>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/product/:categoryId/:categoryName" element={<Product/>}/>
            <Route path="/product/:id/:name" element={<ProductDetails/>}/>
            <Route path="/auth" element={token?<Navigate to={'/profile'}/>:<Auth/>}/>
            <Route path="/profile" element={!token?<Navigate to={'/auth'}/>:<Profile/>}/>
            <Route path="/cart" element={!token?<Navigate to={'/auth'}/>:<Cart/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </Box>
        <Footer />
      </ThemeProvider>
    </>
  );
}
