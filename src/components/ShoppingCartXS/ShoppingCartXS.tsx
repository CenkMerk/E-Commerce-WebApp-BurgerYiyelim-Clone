import { useState } from "react";
//icon
import { AiOutlinePlus, AiOutlineMinus, AiOutlineDelete } from "react-icons/ai";
import { IoMdArrowRoundBack } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
//material ui
import Badge from "@mui/material/Badge";
//redux
import { useDispatch,useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { increase, descrease, removeItem } from "../../redux/cartSlice";
//material ui
import { Stack, Typography, IconButton } from "@mui/material";
//component
import CompletePayment from "../CompletePayment/CompletePayment";
//style
import { CloseButton, CustomDrawer, DrawerButton, ItemBox } from "./style";

const ShoppingCartXS = () => {
  const selectItem = useSelector((state: RootState) => state.cart.selectItems);
  const quantity = useSelector((state: RootState) => state.cart.quantity);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  return (
    <Stack display={{ xs: "flex", md: "none", position: "relative" }}>
      <DrawerButton
        onClick={() => setOpen(true)}
        variant="contained"
        color="success"
      >
        <Badge badgeContent={quantity} color="warning">
          <AiOutlineShoppingCart size={28} />
        </Badge>
      </DrawerButton>
      <CustomDrawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <CloseButton
          variant="contained"
          onClick={() => setOpen(false)}
          startIcon={<IoMdArrowRoundBack />}
        >
          KEEP SHOPPİNG
        </CloseButton>
        <Stack maxHeight="500px" sx={{ overflowY: "overlay" }}>
          {selectItem.map((item, index) => (
            <ItemBox key={index} boxShadow={3}>
              <img src={`${item.img}`} alt="product" width="80px" />
              <Stack>
                <Typography
                  variant="subtitle1"
                  paddingX="10px"
                  fontWeight={600}
                >
                  {item.productName}
                </Typography>
                <Typography variant="h6" gutterBottom paddingX="10px">
                  ${item.price}
                </Typography>
              </Stack>
              <Stack alignItems="center" marginLeft="auto" marginRight="20px">
                <IconButton
                  onClick={() => {
                    dispatch(increase(item.id));
                  }}
                >
                  <AiOutlinePlus />
                </IconButton>
                <Typography>{item.quantity}</Typography>
                {item.quantity === 1 ? (
                  <IconButton
                    onClick={() => {
                      dispatch(removeItem(item.id));
                    }}
                  >
                    <AiOutlineDelete />
                  </IconButton>
                ) : (
                  <IconButton
                    onClick={() => {
                      dispatch(descrease(item.id));
                    }}
                  >
                    <AiOutlineMinus />
                  </IconButton>
                )}
              </Stack>
            </ItemBox>
          ))}
        </Stack>
        <CompletePayment />
      </CustomDrawer>
    </Stack>
  );
};

export default ShoppingCartXS;
