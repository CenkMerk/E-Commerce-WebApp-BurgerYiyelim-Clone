import { Button, Stack, styled } from "@mui/material";

export const ContainerStack = styled(Stack)({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  minHeight: "100px",
  justifyContent: "space-between",
  alignItems: "center",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#e8e8e8",
  },
  borderBottom: "1px solid #e8e8e8",
  ":last-child": {
    borderBottom: "none",
  },
});
export const DeliveryButton = styled(Button)({
  backgroundColor: "#d3251c",
  color: "white",
  width: "100px",
  "&:hover": {
    backgroundColor: "#d3251c",
  },
});
export const PickupButton = styled(Button)({
  backgroundColor: "#acb47f",
  color: "white",
  width: "100px",
  "&:hover": {
    backgroundColor: "#acb47f",
  },
});
