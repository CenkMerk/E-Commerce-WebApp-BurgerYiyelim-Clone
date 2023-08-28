import { Drawer, Button, styled, Box } from "@mui/material";

export const ItemBox = styled(Box)({
  margin: "10px",
  flexDirection: "row",
  display: "flex",
  borderRadius: "5px",
  alignItems: "center",
});

export const CustomDrawer = styled(Drawer)(({ theme }) => ({
  position: "relative",
  "& .MuiDrawer-paper": {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "400px",
    },
  },
}));

export const DrawerButton = styled(Button)({
  position: "absolute",
  top: "-25px",
  right: "0px",
});

export const CloseButton = styled(Button)({
  borderRadius: "0px",
  backgroundColor: "#B3261E",
  "&:hover": {
    backgroundColor: "#386a20",
  },
  fontWeight: "600",
});
