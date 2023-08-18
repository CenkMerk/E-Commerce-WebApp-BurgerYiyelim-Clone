import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import NavbarXS from "./NavbarXS";
import NavbarMD from "./NavbarMD";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{ backgroundColor: "#940c00" }}>
      <Container sx={{ maxWidth: "1170px" }}>
        <Toolbar disableGutters>
          <Box
            bgcolor="white"
            borderRadius="0px 0px 10px 10px"
            position="absolute"
            padding="20px 0px"
            sx={{ width: { xs: "100px", sm: "150px" }, cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            <img src="navbar-logo.png" alt="navbarlogo" width="100%" />
          </Box>
          <NavbarMD />
          <OrderButton  onClick={() => navigate("/product")}>ORDER NOW</OrderButton>
          <NavbarXS />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
const OrderButton = styled(Button)({
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
