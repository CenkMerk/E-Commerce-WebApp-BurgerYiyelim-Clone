//material ui
import { Stack, Typography } from "@mui/material";

const EmptyCart = () => {
  return (
    <Stack justifyContent="center" alignItems="center" height="100%">
      <img src="empty_cart.png" alt="" width="100%" />
      <Typography variant="h6" color="#c2c2c2 ">
        Cart Empty
      </Typography>
    </Stack>
  );
};

export default EmptyCart;
