import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function CartCategory({ img, id, title }) {
  return (
    <Box
      width={"100%"}
      height={"400px"}
      sx={{
        borderRadius: "20px",
        overflow: "hidden",
        position: "relative",
        boxShadow: "0 0 5px 2px rgba(0,0,0,0.2)",
        "& a": {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          fontSize: "32px",
          visibility: "hidden",
          opacity: "0",
          transition: "all .5s",
          color: "white",
          textDecoration:'none !important'
        },
        "&:hover a": {
          visibility: "visible !important",
          opacity: "1 !important",
        },
        "& img": {
          width: "100%",
          height: "100%",
        
          transition: "all 0.5s",
          objectFit:'cover',
          objectPosition:'center'
        },
        "&:hover img": {
          filter: "brightness(60%)",
        },
      }}>
     <Box component={'img'} src={import.meta.env.VITE_BASE_URL+img} />
      <Link to={`/products/${id}/${title.replaceAll(' ','-')}`}>
            {title}
      </Link>
    </Box>
  );
}
