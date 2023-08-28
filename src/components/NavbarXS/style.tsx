import { Box, Button, styled } from "@mui/material";

export const MenuButton = styled(Button)({
  backgroundColor: "white",
  padding: "10px",
  marginLeft: "10px",
  "&:hover": {
    backgroundColor: "white",
  },
});

export const BoxContainer = styled(Box)({
  height: "80px",
  justifyContent: "end",
  alignItems: "center",
});
