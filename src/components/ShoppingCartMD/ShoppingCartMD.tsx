import { Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { increase, descrease, removeItem } from "../../redux/cartSlice";
import { CartButton, StackContainer } from "./style";
import EmptyCart from "./EmptyCart";
import CompletePayment from "../CompletePayment/CompletePayment";

const ShoppingCartMD = () => {
  const selectItem = useSelector((state: RootState) => state.cart.selectItems);
  const dispatch = useDispatch();

  return (
    <StackContainer display={{ xs: "none", md: "flex" }}>
      <Typography variant="h6" gutterBottom>
        My Order
      </Typography>
      {selectItem.length == 0 ? (
        <EmptyCart />
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
          <CompletePayment />
        </Stack>
      )}
    </StackContainer>
  );
};
export default ShoppingCartMD;
