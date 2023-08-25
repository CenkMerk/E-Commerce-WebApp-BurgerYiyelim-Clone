import { useNavigate } from "react-router-dom";
import { LocationItemProps } from "../types";
import { Button, Stack, Typography, styled } from "@mui/material";

const LocationItem = ({
  address,
  delivery,
  locationName,
  pickup,
}: LocationItemProps) => {
  const navigate = useNavigate();

  return (
    <ContainerStack onClick={() => navigate("/product")}>
      <Stack paddingLeft="20px">
        <Typography variant="h6">{locationName}</Typography>
        <Typography variant="subtitle2">{address}</Typography>
      </Stack>
      <Stack
        flexDirection={{ sx: "column", sm: "row" }}
        paddingRight="20px"
        gap="10px"
      >
        <DeliveryButton
          sx={{
            visibility: delivery ? "visible" : "hidden",
          }}
        >
          DELIVERY
        </DeliveryButton>
        <PickupButton
          sx={{
            visibility: pickup ? "visible" : "hidden",
          }}
        >
          PICKUP
        </PickupButton>
      </Stack>
    </ContainerStack>
  );
};
const ContainerStack = styled(Stack)({
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
const DeliveryButton = styled(Button)({
  backgroundColor: "#d3251c",
  color: "white",
  width: "100px",
  "&:hover": {
    backgroundColor: "#d3251c",
  },
});
const PickupButton = styled(Button)({
  backgroundColor: "#acb47f",
  color: "white",
  width: "100px",
  "&:hover": {
    backgroundColor: "#acb47f",
  },
});
export default LocationItem;
