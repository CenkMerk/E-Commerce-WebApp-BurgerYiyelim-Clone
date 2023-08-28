//material ui
import { Container, Toolbar } from "@mui/material";
//components
import NavbarXS from "../NavbarXS/NavbarXS";
import NavbarMD from "../NavbarMD/NavbarMD";
//navigate
import { useNavigate } from "react-router-dom";
//style
import { OrderButton, AppBarContainer, BoxContainer } from "./style";
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBarContainer>
      <Container sx={{ maxWidth: "1170px" }}>
        <Toolbar disableGutters>
          <BoxContainer
            width={{ xs: "100px", sm: "150px" }}
            onClick={() => navigate("/")}
          >
            <img src="navbar-logo.png" alt="navbarlogo" width="100%" />
          </BoxContainer>
          <NavbarMD />
          <OrderButton onClick={() => navigate("/product")}>
            ORDER NOW
          </OrderButton>
          <NavbarXS />
        </Toolbar>
      </Container>
    </AppBarContainer>
  );
};

export default Navbar;
