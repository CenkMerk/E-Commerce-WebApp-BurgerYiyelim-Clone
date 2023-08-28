import { AppBar, Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const OrderButton = styled(Button)({
  padding: "10px 15px",
  backgroundColor: "#fec52e",
  color: "black",
  fontWeight: "700",
  marginLeft: "auto",
  "&:hover": {
    backgroundColor: "#fec52e",
    color: "white",
    boxShadow: "0px 0px 15px 5px rgb(255 255 255 / 0.2)",
  },
});

export const AppBarContainer = styled(AppBar)({
  position: "static",
  backgroundColor: "#940c00",
});

export const BoxContainer = styled(Box)({
  backgroundColor: "white",
  borderRadius: "0px 0px 10px 10px",
  position: "absolute",
  padding: "20px 0px",
  cursor: "pointer",
});
