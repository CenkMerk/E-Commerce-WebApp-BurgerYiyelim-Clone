import { IconButton, Stack, styled } from "@mui/material";

export const StackContainer = styled(Stack)({
  bgcolor: "white",
  borderRadius: "2px",
  padding: "10px",
});
export const AddButton = styled(IconButton)({
  borderRadius: "5px",
  backgroundColor: "#f8f8f8",
  ":hover": {
    backgroundColor: "white",
  },
});
export const ProductStack = styled(Stack)({
  gap: "10px",
  backgroundColor: "white",
  padding: "10px",
  borderRadius: "2px",
  ":hover": {
    backgroundColor: "#f8f8f8",
    cursor: "pointer",
  },
});
