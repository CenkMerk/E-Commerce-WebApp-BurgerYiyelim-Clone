import { useNavigate } from "react-router-dom";
import { LocationItemProps } from "../../types";
import { Stack, Typography } from "@mui/material";
import { ContainerStack, DeliveryButton, PickupButton } from "./style";
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

export default LocationItem;
