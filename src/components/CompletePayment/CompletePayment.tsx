import { Stack, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { clearCart } from "../../redux/cartSlice";
import { PaymentButton } from "./style";

const CompletePayment = () => {
  const total = useSelector((state: RootState) => state.cart.total);
  const dispatch = useDispatch();
  const HandleClick = () => {
    dispatch(clearCart());
    alert(`Amount Paid: ₺ ${total}`);
  };
  return (
    <Stack marginTop="auto">
      <Typography
        variant="h6"
        fontWeight={500}
        padding="5px"
        sx={{ backgroundColor: "#F0F3E8" }}
      >
        Total Amount : ₺{total}
      </Typography>
      <PaymentButton variant="contained" onClick={HandleClick}>
        Complete Payment
      </PaymentButton>
    </Stack>
  );
};

export default CompletePayment;
