import { useState } from "react";
import {
  FormControl,
  InputLabel,
  Typography,
  Stack,
  MenuItem,
  Select,
  Container,
} from "@mui/material";
import { LocationsData } from "../constant/LocationsData";
import LocationsList from "../components/LocationsList";

const LocationPage = () => {
  const [selectedCity, setSelectedCity] = useState("2");
  return (
    <>
      <Stack
        bgcolor="#F5F5F5"
        margin="20px"
        borderRadius="2px"
        alignItems="center"
        paddingY="30px"
        gap="10px"
        border="1px solid #e8e8e8"
      >
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
      </Stack>

      <LocationsList cityId={selectedCity} />
    </>
  );
};

export default LocationPage;
