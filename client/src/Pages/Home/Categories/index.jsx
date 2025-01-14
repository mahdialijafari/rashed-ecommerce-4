import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import fetchData from "../../../Utils/fetchData";
import CartCategory from "./CartCategory";

export default function Categories() {
    const [categories,setCategories]=useState()
    useEffect(() => {
        (async () => {
          const response = await fetchData("category");
          setCategories(response.data);
        })();
      }, []);
      const items=categories?.map((e,index)=><CartCategory id={e._id} key={index} title={e.title} img={e.image[0]} />)
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "repeat(2,1fr)", md: "repeat(3,1fr)" },
        gap: "20px",
        padding:'0 5%',
        margin:'50px 0'
      }}
    >
        {items}
    </Box>
  );
}
