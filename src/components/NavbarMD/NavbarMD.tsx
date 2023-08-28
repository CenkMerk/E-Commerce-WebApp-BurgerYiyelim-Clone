//data
import { NavbarData } from "../../constant/NavbarData";
//navigation
import { useNavigate } from "react-router-dom";
//style
import { NavbarButton, BoxContainer } from "./style";

const NavbarMD = () => {
  const navigate = useNavigate();
  
  return (
    <BoxContainer sx={{ display: { xs: "none", md: "flex" } }}>
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
    </BoxContainer>
  );
};

export default NavbarMD;
