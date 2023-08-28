import { useState } from "react";
//icon
import { AiOutlinePlus, AiOutlineMinus, AiOutlineDelete } from "react-icons/ai";
import { IoMdArrowRoundBack } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
//material ui
import Badge from "@mui/material/Badge";
//redux
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import {
  Drawer,
  Button,
  styled,
  Stack,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import { increase, descrease, removeItem,clearCart  } from "../redux/cartSlice";

const ShoppingCartXS = () => {
  const selectItem = useSelector((state: RootState) => state.cart.selectItems);
  const quantity = useSelector((state: RootState) => state.cart.quantity);
  const total = useSelector((state: RootState) => state.cart.total)
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const HandleClick = () => {
    dispatch(clearCart());
    alert(`Amount Paid: ₺ ${total}`);
  };
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
            <Box
              key={index}
              boxShadow={3}
              margin={2}
              flexDirection="row"
              display="flex"
              borderRadius={2}
              alignItems="center"
            >
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
            </Box>
          ))}
        </Stack>
        <Stack marginTop="auto">
          <Typography
            variant="h6"
            fontWeight={600}
            padding="10px"
            sx={{ backgroundColor: "#F0F3E8" }}
          >
            Total Amount : ${total}
          </Typography>
          <PaymentButton
            variant="contained"
            onClick={HandleClick}
            disabled={total === 0}
          >
            Complete Payment
          </PaymentButton>
        </Stack>
      </CustomDrawer>
    </Stack>
  );
};
export const CustomDrawer = styled(Drawer)(({ theme }) => ({
  position: "relative",
  "& .MuiDrawer-paper": {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "400px",
    },
  },
}));

export const DrawerButton = styled(Button)({
  position: "absolute",
  top: "-25px",
  right: "0px",
});

export const AddToBagButton = styled(Button)({
  borderRadius: "10px 10px 0px 0px",
  width: "200px",
  backgroundColor: "#B3261E",
  "&:hover": {
    backgroundColor: "#386a20",
  },
});

export const CloseButton = styled(Button)({
  borderRadius: "0px",
  backgroundColor: "#B3261E",
  "&:hover": {
    backgroundColor: "#386a20",
  },
  fontWeight: "600",
});
export const PaymentButton = styled(Button)({
  borderRadius: "0px",
  padding:"20px 0px",
  backgroundColor: "#386a20",
  "&:hover": {
    backgroundColor: "#386a20",
  },
  fontWeight:"600",
});

export default ShoppingCartXS;
