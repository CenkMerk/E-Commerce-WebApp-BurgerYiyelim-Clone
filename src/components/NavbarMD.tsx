import { NavbarData } from "../constant/NavbarData";
import { Button, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const NavbarMD = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "none", md: "flex" },
        height: "90px",
        justifyContent: "end",
        marginRight: "50px",
      }}
    >
      {NavbarData.map((item) => (
        <NavbarButton
          variant="outlined"
          startIcon={item.icon}
          key={item.text}
          onClick={() => navigate(item.navigationKey)}
        >
          {item.text}
        </NavbarButton>
      ))}
    </Box>
  );
};

export default NavbarMD;

const NavbarButton = styled(Button)({
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
