import { Box, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchData from "../../Utils/fetchData";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../Store/Slices/CartSlice";
export default function ProductDetails() {
  const [product, setProduct] = useState();
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      const response = await fetchData(`product/${id}?populate=categoryId`);
      setProduct(response.data);
    })();
  }, [id]);
  const productQuantity = useSelector((state) => state.cart.items)?.filter(
    (e) => e._id == id
  )[0]?.cartQuantity;
  const dispatch=useDispatch()
  return (
    <Box
      boxShadow={"0 0 5px 2px rgba(0,0,0,0.2)"}
      borderRadius={"10px"}
      sx={{ padding: 2, maxWidth: 1200, margin: "auto", mt: 4 }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          {!product ? (
            <Skeleton variant="rectangular" height={400} />
          ) : (
            <CardMedia
              component="img"
              sx={{ height: { xs: 300, md: 400 }, borderRadius: 2 }}
              image={`${import.meta.env.VITE_BASE_URL}${product.images[0]}`}
              alt={product.name}
            />
          )}
        </Grid>

        <Grid item xs={12} md={6}>
          <CardContent>
            {!product ? (
              <>
                <Skeleton variant="text" width="70%" height={40} />
                <Skeleton variant="text" width="90%" height={80} />
                <Skeleton variant="text" width="50%" height={30} />
              </>
            ) : (
              <>
                <Typography gutterBottom variant="h4" component="div">
                  {product.name}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {product.description}
                </Typography>
                <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
                  Price: ${product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Quantity: {product.quantity}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Category: {product.categoryId.title}
                </Typography>
              </>
            )}
          </CardContent>

          {!product ? (
            <Skeleton
              variant="rectangular"
              width={200}
              height={50}
              sx={{ mt: 2 }}
            />
          ) : (
            <>
              {productQuantity ? (
                <Stack flexDirection={'row'} alignItems={'center'} gap={'10px'}>
                  <Button onClick={()=>dispatch(removeFromCart(product._id))} variant="contained" color="error" sx={{ mt: 2 }}>
                    -
                  </Button>
                  <Typography variant={'body2'}>{productQuantity}</Typography>
                  <Button disabled={productQuantity>=product.quantity} onClick={()=>dispatch(addToCart(product))} variant="contained" color="success" sx={{ mt: 2 }}>
                    +
                  </Button>
                </Stack>
              ) : (
                <Button disabled={productQuantity>=product.quantity} onClick={()=>dispatch(addToCart(product))} variant="contained" color="primary" sx={{ mt: 2 }}>
                  Add to Cart
                </Button>
              )}
            </>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
