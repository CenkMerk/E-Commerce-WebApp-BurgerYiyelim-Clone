import { LocationsListProps } from "../types";
import { Stack } from "@mui/material";
import { LocationsData } from "../constant/LocationsData";
import LocationItem from "./LocationItem";
const LocationsList = ({ cityId }: LocationsListProps) => {
  const foundLocation = LocationsData.find(
    (location) => location.id === cityId
  );
  console.log(foundLocation);
  return (
    <Stack border="1px solid #e8e8e8" borderRadius="2px" margin="20px">
      {foundLocation?.location.map((item, index) => (
        <LocationItem
          address={item.address}
          delivery={item.delivery}
          locationName={item.locationName}
          pickup={item.pickup}
          key={index}
        />
      ))}
    </Stack>
  );
};

export default LocationsList;
