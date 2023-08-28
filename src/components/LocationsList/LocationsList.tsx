//types
import { LocationsListProps } from "../../types";
//data
import { LocationsData } from "../../constant/LocationsData";
//component
import LocationItem from "../LocationItem/LocationItem";
//style
import { StackContainer } from "./style";

const LocationsList = ({ cityId }: LocationsListProps) => {
  const foundLocation = LocationsData.find(
    (location) => location.id === cityId
  );

  return (
    <StackContainer>
      {foundLocation?.location.map((item, index) => (
        <LocationItem
          address={item.address}
          delivery={item.delivery}
          locationName={item.locationName}
          pickup={item.pickup}
          key={index}
        />
      ))}
    </StackContainer>
  );
};

export default LocationsList;
