import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import { GiHamburgerMenu } from "react-icons/gi";
import { styled } from "@mui/material/styles";
import React from "react";
import { NavbarData } from "../constant/NavbarData";
import { useNavigate } from "react-router-dom";

const NavbarXS = () => {
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <Box
      sx={{
        display: { xs: "inline-flex", md: "none" },
        height: "80px",
        justifyContent: "end",
        alignItems: "center",
      }}
    >
      <MenuButton onClick={handleOpenNavMenu}>
        <GiHamburgerMenu color="black" size={25} />
      </MenuButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        {NavbarData.map((item) => (
          <MenuItem key={item.text} onClick={() => navigate(item.navigationKey)}>
            <Typography textAlign="center">{item.text}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default NavbarXS;
const MenuButton = styled(Button)({
  backgroundColor: "white",
  padding: "10px",
  marginLeft: "10px",
  "&:hover": {
    backgroundColor: "white",
  },
});
