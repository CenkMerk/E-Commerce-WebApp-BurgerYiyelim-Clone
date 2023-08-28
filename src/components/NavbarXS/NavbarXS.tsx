import { Menu, MenuItem, Typography } from "@mui/material";
import { GiHamburgerMenu } from "react-icons/gi";
import React from "react";
import { NavbarData } from "../../constant/NavbarData";
import { useNavigate } from "react-router-dom";
import { MenuButton, BoxContainer } from "./style";

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
    <BoxContainer display={{ xs: "inline-flex", md: "none" }}>
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
          <MenuItem
            key={item.text}
            onClick={() => navigate(item.navigationKey)}
          >
            <Typography textAlign="center">{item.text}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </BoxContainer>
  );
};

export default NavbarXS;
