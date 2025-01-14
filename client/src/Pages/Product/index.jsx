import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Stack } from "@mui/material";
import fetchData from "../../Utils/fetchData";
import Slider from "@mui/material/Slider";
import ProductCard from "./ProductCard";
import SkeletonProduct from "./SkeletoProduct";
// import ProductCard from "./ProductCard";
// import SkeletonProduct from "./SkeletonProduct";

const marks=[
  {
    value: 0,
    label: "$0",
  },
  {
    value: 500,
    label: "$500",
  }
];

function valuetext(value) {
  return `$${value}`;
}

export default function Product() {
  const [products, setProducts] = useState();
  const [price,setPrice]=useState([0 ,500])
  const { categoryId } = useParams();
  const [sort, setSort] = useState("-createdAt");

  useEffect(() => {
    (async () => {
      const response = await fetchData(
        `product?populate=categoryId&sort=${sort}&${
          categoryId == "all" ? "" : `filters[categoryId][$eq]=${categoryId}&`
        }filters[price][$gte]=${price[0]}&filters[price][$lte]=${price[1]}`
      );
      setProducts(response.data)
    })();
  }, [categoryId, sort,price]);
  const skeletonItems=Array.from({length:10},(_,index)=><SkeletonProduct key={index} />)
  const productItems=products?.map((e,index)=><ProductCard description={e.description} id={e._id} img={e.images[0]} name={e.name} price={e.price} key={index} />)
  return (
    <>
      <Stack sx={{padding:'50px 5%'}} flexDirection={"row"} justifyContent={"space-between"}>
        <Box sx={{ width: 300 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Sort</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sort}
              label="Sort"
              onChange={(e) => setSort(e.target.value)}
            >
              <MenuItem value={"-createdAt"}>Newest</MenuItem>
              <MenuItem value={"createdAt"}>Latest</MenuItem>
              <MenuItem value={"-price"}>Highest Price</MenuItem>
              <MenuItem value={"price"}>Lowest Price</MenuItem>
              <MenuItem value={"name"}>Name A-Z</MenuItem>
              <MenuItem value={"-name"}>Name Z-A</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ width: 300 }}>
          <Slider
            aria-label="Always visible"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            min={0}
            max={500}
            getAriaValueText={valuetext}
            step={5}
            marks={marks}
            valueLabelDisplay="on"
          />
        </Box>
      </Stack>
      <Box sx={{padding:'20px 5%',display:'grid', gridTemplateColumns:{xs:'1fr',md:'repeat(3,1fr)',lg:'repeat(4,1fr)'},gap:'10px'}}>
        {products?productItems:skeletonItems}
      </Box>
    </>
  );
}
