import {
  Button,
  Grid,
  IconButton,
  Stack,
  Typography,
  Box,
  styled,
} from "@mui/material";
import { FooterData } from "../constant/FooterData";
import { useNavigate } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineInstagram } from "react-icons/ai";
import { TfiYoutube } from "react-icons/tfi";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <Stack
      bgcolor="#2b2b2b"
      alignItems="center"
      width="100%"
      paddingY="40px"
    >
      <Grid container sx={{ maxWidth: "1170px",paddingX:"10px" }} spacing={6}>
        <Grid item md={3} sm={6} xs={12}>
          <FooterTitle>Burger Yiyelim</FooterTitle>
          <FooterText>
            The sole right owner of the Burger Yiyelim brand is Keban Et. The
            prices on our website may vary according to branches, takeaway
            service and come-and-go service. Burger Yiyelim reserves the right
            to change and terminate all promotions and campaigns.
          </FooterText>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <FooterTitle>LINKS</FooterTitle>
          <Stack>
            {FooterData.map((item, index) => (
              <FooterButton
                key={index}
                variant="text"
                onClick={() => navigate(item.navigationKey)}
              >
                {item.text}
              </FooterButton>
            ))}
          </Stack>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <FooterTitle>MENU</FooterTitle>
          <FooterButton variant="text" onClick={() => navigate("/product")}>
            Menu
          </FooterButton>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <FooterTitle>CONTACT US</FooterTitle>
          <Stack gap={2}>
            <FooterText>
              <IoLocationSharp size={15} />
              {"  "}Yenibosna Merkez Mah, Kavak Sk. No:4/B, 34197
              Bahçelievler/İstanbul Bahçelievler / İstanbul
            </FooterText>
            <FooterText>
              <MdEmail size={15} />
              {"  "}destek@kebanet.com
            </FooterText>
            <Box>
              <IconButton>
                <GrFacebookOption color="#888888" />
              </IconButton>
              <IconButton>
                <AiOutlineInstagram color="#888888" />
              </IconButton>
              <IconButton>
                <TfiYoutube color="#888888" />
              </IconButton>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Footer;
const FooterTitle = styled(Typography)({
  color: "white",
  fontWeight: "600",
  fontSize: "20px",
  marginBottom: "30px",
  borderBottom: "1px solid rgba(204,204,204,.5)",
  paddingBottom: "10px",
});
const FooterText = styled(Typography)({
  color: "#888888",
  fontSize: "15px",
  lineHeight: "26px",
});

const FooterButton = styled(Button)({
  color: "#cccccc",
  justifyContent: "flex-start",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "inherit",
    color: "white",
  },
});
