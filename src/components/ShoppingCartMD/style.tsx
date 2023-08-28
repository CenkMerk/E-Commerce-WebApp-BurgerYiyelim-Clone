import { IconButton, Stack, styled, Button } from "@mui/material";

export const StackContainer = styled(Stack)({
  backgroundColor: "white",
  maxHeight: "400px",
  borderRadius: "5px",
  padding: "10px",
  width: "600px",
});

export const CartButton = styled(IconButton)({
  borderRadius: "5px",
  backgroundColor: "#f8f8f8",
  ":hover": {
    backgroundColor: "white",
  },
});
