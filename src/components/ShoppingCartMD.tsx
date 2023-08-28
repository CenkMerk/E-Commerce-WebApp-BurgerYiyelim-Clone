import { IconButton, Stack, Typography, styled, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { increase, descrease, removeItem, clearCart } from "../redux/cartSlice";

const ShoppingCartMD = () => {
  const selectItem = useSelector((state: RootState) => state.cart.selectItems);
  const total = useSelector((state: RootState) => state.cart.total);
  const dispatch = useDispatch();

  const HandleClick = () => {
    dispatch(clearCart());
    alert(`Amount Paid: ₺ ${total}`);
  };
  return (
    <Stack
      display={{ xs: "none", md: "flex" }}
      bgcolor="white"
      maxHeight="400px"
      borderRadius="5px"
      padding="10px"
      width="600px"
    >
      <Typography variant="h6" gutterBottom>
        My Order
      </Typography>
      {selectItem.length == 0 ? (
        <Stack justifyContent="center" alignItems="center" height="100%">
          <img src="empty_cart.png" alt="" width="100%" />
          <Typography variant="h6" color="#c2c2c2 ">
            Cart Empty
          </Typography>
        </Stack>
      ) : (
        <Stack height="100%">
          <Stack gap="10px" maxHeight="250px" sx={{ overflowY: "overlay" }}>
            {selectItem.map((item, index) => (
              <Stack
                key={index}
                flexDirection="row"
                gap="5px"
                padding="5px"
                boxShadow={1}
              >
                <img src={`${item.img}`} alt="" width="80px" />
                <Stack alignSelf="center">
                  <Typography>{item.productName}</Typography>
                  <Typography>₺{item.price}</Typography>
                </Stack>
                <Stack alignItems="center" marginLeft="20px">
                  <CartButton
                    size="small"
                    onClick={() => {
                      dispatch(increase(item.id));
                    }}
                  >
                    <AiOutlinePlus />
                  </CartButton>
                  <Typography>{item.quantity}</Typography>
                  {item.quantity === 1 ? (
                    <CartButton
                      size="small"
                      onClick={() => {
                        dispatch(removeItem(item.id));
                      }}
                    >
                      <AiOutlineDelete />
                    </CartButton>
                  ) : (
                    <CartButton
                      size="small"
                      onClick={() => {
                        dispatch(descrease(item.id));
                      }}
                    >
                      <AiOutlineMinus />
                    </CartButton>
                  )}
                </Stack>
              </Stack>
            ))}
          </Stack>
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
        </Stack>
      )}
    </Stack>
  );
};
const CartButton = styled(IconButton)({
  borderRadius: "5px",
  backgroundColor: "#f8f8f8",
  ":hover": {
    backgroundColor: "white",
  },
});
export const PaymentButton = styled(Button)({
  borderRadius: "0px",
  padding: "10px 0px",
  backgroundColor: "#386a20",
  "&:hover": {
    backgroundColor: "#386a20",
  },
  fontWeight: "600",
});
export default ShoppingCartMD;
