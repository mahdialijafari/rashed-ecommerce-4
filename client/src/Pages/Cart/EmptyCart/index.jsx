import React from "react";
import { Box, Typography, Paper, Button } from "@mui/material";
import { styled } from "@mui/system";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";

// Styled components for custom styling
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(6),
  maxWidth: 600,
  width: "100%",
  textAlign: "center",
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[10],
  backgroundColor: theme.palette.background.paper,
}));

const EmptyCartIcon = styled(ShoppingCartIcon)(({ theme }) => ({
  fontSize: "6rem",
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(3),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
  padding: theme.spacing(1.5),
  fontSize: "1rem",
  fontWeight: "bold",
  background: "linear-gradient(45deg, #2196F3 30%, #9C27B0 90%)",
  color: "white",
  "&:hover": {
    background: "linear-gradient(45deg, #1976D2 30%, #7B1FA2 90%)",
  },
}));

const EmptyCart = () => {
    const navigate=useNavigate()
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{
        background: "linear-gradient(45deg, #E3F2FD 30%, #F3E5F5 90%)",
      }}
    >
      <StyledPaper elevation={3}>
        {/* Empty Cart Icon */}
        <EmptyCartIcon />

        {/* Title */}
        <Typography variant="h4" component="h1" gutterBottom>
          Your Cart is Empty
        </Typography>

        {/* Subtitle */}
        <Typography variant="body1" color="textSecondary" gutterBottom>
          Looks like you haven't added anything to your cart yet.
        </Typography>

        {/* Call to Action */}
        <StyledButton
          variant="contained"
          onClick={() => {
            navigate('/products/all/all-category')
          }}
        >
          Start Shopping
        </StyledButton>
      </StyledPaper>
    </Box>
  );
};

export default EmptyCart;