import { useState } from "react";
//material ui
import {
  FormControl,
  InputLabel,
  Typography,
  Stack,
  MenuItem,
  Select,
} from "@mui/material";
//data
import { LocationsData } from "../../constant/LocationsData";
//component
import LocationsList from "../../components/LocationsList/LocationsList";
//style
import { StackContainer } from "./style";

const LocationPage = () => {
  const [selectedCity, setSelectedCity] = useState("2");
  
  return (
    <Stack bgcolor="white" padding="20px">
      <StackContainer>
        <Typography variant="h6">Please select the city</Typography>
        <FormControl
          sx={{ maxWidth: "300px", backgroundColor: "white" }}
          fullWidth
        >
          <InputLabel id="demo-simple-select-label">City</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedCity}
            label="Age"
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            {LocationsData.map((item) => (
              <MenuItem key={item.id} value={item.id}>
                {item.city}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </StackContainer>

      <LocationsList cityId={selectedCity} />
    </Stack>
  );
};

export default LocationPage;
