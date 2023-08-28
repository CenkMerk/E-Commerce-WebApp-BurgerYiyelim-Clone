import { Button, Stack, Typography, styled } from "@mui/material";

export const StackContainer = styled(Stack)({
  backgroundColor: "#2b2b2b",
  alignItems: "center",
  width: "100%",
  padding: "40px 0px",
});

export const FooterTitle = styled(Typography)({
  color: "white",
  fontWeight: "600",
  fontSize: "20px",
  marginBottom: "30px",
  borderBottom: "1px solid rgba(204,204,204,.5)",
  paddingBottom: "10px",
});
export const FooterText = styled(Typography)({
  color: "#888888",
  fontSize: "15px",
  lineHeight: "26px",
});

export const FooterButton = styled(Button)({
  color: "#cccccc",
  justifyContent: "flex-start",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "inherit",
    color: "white",
  },
});
