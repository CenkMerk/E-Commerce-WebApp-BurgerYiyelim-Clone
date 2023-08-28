import { Link, Stack, Typography, styled } from "@mui/material";

export const StackContainer = styled(Stack)({
  backgroundColor: "white",
  borderRadius: "5px",
  minWidth: "200px",
});

export const TabsLink = styled(Link)({
  color: "#414551",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  gap: "5px",
  padding: "10px",
  borderBottom: "1px solid #eaebeb",
  ":hover": {
    color: "#f30",
  },
});
