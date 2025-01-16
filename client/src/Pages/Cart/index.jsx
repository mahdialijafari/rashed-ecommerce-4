import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button, TableFooter, Typography } from "@mui/material";
import { addToCart, clear, removeFromCart } from "../../Store/Slices/CartSlice";
import EmptyCart from "./EmptyCart";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Cart() {
  const { totalPrice, items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const tableItems = items?.map((e, index) => (
    <StyledTableRow>
      <StyledTableCell align="center">{index + 1}</StyledTableCell>
      <StyledTableCell align="center">{e.name}</StyledTableCell>
      <StyledTableCell align="center">
        <Box
          sx={{
            width: "60px",
            height: "60px",
            borderRadius: "5px",
            objectFit: "cover",
          }}
          component={"img"}
          src={import.meta.env.VITE_BASE_URL + e.images[0]}
        />
      </StyledTableCell>
      <StyledTableCell align="center">${e.price}</StyledTableCell>
      <StyledTableCell align="center">{e.cartQuantity}</StyledTableCell>
      <StyledTableCell align="center">
        ${e.price * e.cartQuantity}
      </StyledTableCell>
      <StyledTableCell align="center">
        <Button
          onClick={() => dispatch(removeFromCart(e._id))}
          variant="contained"
          color="error"
          sx={{ mt: 2 }}
        >
          -
        </Button>
        <Button
          disabled={e.cartQuantity >= e.quantity}
          onClick={() => dispatch(addToCart(e))}
          variant="contained"
          color="success"
          sx={{ mt: 2 }}
        >
          +
        </Button>
      </StyledTableCell>
    </StyledTableRow>
  ));
  return (
    <>
      {items.length > 0 ? (
        <>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">ID</StyledTableCell>
                  <StyledTableCell align="center">Name</StyledTableCell>
                  <StyledTableCell align="center">Image</StyledTableCell>
                  <StyledTableCell align="center">Price</StyledTableCell>
                  <StyledTableCell align="center">
                    Cart Quantity
                  </StyledTableCell>
                  <StyledTableCell align="center">Total Price</StyledTableCell>
                  <StyledTableCell align="center">Actions</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableItems}
              </TableBody>
              <TableFooter>
              <TableRow>
                  <StyledTableCell align="center"></StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                  <StyledTableCell align="center">
                  </StyledTableCell>
                  <StyledTableCell align="center">Total Price</StyledTableCell>
                  <StyledTableCell align="center">${totalPrice}</StyledTableCell>
                </TableRow>
                
              </TableFooter>
            </Table>
          </TableContainer>
          <Button
          onClick={() => dispatch(clear())}
          variant="contained"
          color="error"
          sx={{ mt: 2 }}
        >
          Clear Cart
        </Button>
        </>
      ) : (
        <EmptyCart/>
      )}
    </>
  );
}
