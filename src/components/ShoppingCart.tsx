import { Stack, Typography } from "@mui/material";
import React from "react";

const ShoppingCart = () => {
  return (
    <Stack
      display={{ xs: "none", md: "flex" }}
      width="500px"
      bgcolor="white"
      height="300px"
      borderRadius="5px"
      padding="10px"
    >
      <Typography variant="h6">My Order</Typography>
      <Stack justifyContent="center" alignItems="center" height="100%">
        <img src="empty_cart.png" alt="" width="100%" />
        <Typography variant="h6" color="#c2c2c2 ">
          Cart Empty
        </Typography>
      </Stack>
    </Stack>
  );
};

export default ShoppingCart;
