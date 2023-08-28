import { Link, Stack, styled } from "@mui/material";

export const TabsLink = styled(Link)({
  backgroundColor: "#940c00",
  borderRadius: "10px",
  color: "white",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  gap: "5px",
  padding: "10px",
  borderBottom: "1px solid #eaebeb",
  ":hover": {
    opacity: "0.8",
  },
});

export const StackContainer = styled(Stack)({
  flexDirection: "row",
  gap: "5px",
});
