import { Button, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const NavbarButton = styled(Button)({
  color: "white",
  height: "100%",
  fontWeight: "600",
  borderWidth: "0px 1px 0px 0px",
  borderColor: "#770a00",
  "&:hover": {
    backgroundColor: "#880b00",
    borderWidth: "0px 1px 0px 0px",
    borderColor: "#770a00",
  },
  "&:focus": {
    backgroundColor: "#880b00",
  },
  ":last-child": {
    borderWidth: "0px",
  },
});
export const BoxContainer = styled(Box)({
    flexGrow: 1,
    height: "90px",
    justifyContent: "end",
    marginRight: "50px",
});
