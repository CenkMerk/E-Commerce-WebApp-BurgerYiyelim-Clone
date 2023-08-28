//material ui
import { Stack, Typography } from "@mui/material";
//style
import { FormInput, SendButton } from "./style";
const FranchisingPage = () => {
  return (
    <Stack bgcolor="white" padding="20px">
      <Stack position="relative">
        <img src="franchising.jpg" alt="" />
        <Typography
          color="white"
          position="absolute"
          bottom="-15px"
          right="0px"
          fontSize={{ xs: "40px", sm: "70px" }}
        >
          FRANCHISING
        </Typography>
      </Stack>
      <Stack gap="20px" marginTop="20px">
        <Typography variant="h5" gutterBottom color="#db1e38">
          Franchising - Pre-Application Form
        </Typography>
        <FormInput label="Name Surname" variant="outlined" />
        <Stack
          sx={{
            flexDirection: { sx: "column", md: "row" },
            justifyContent: { md: "space-between" },
            gap: "20px",
          }}
        >
          <FormInput label="E-Mail Address" variant="outlined" fullWidth />
          <FormInput label="Phone Number" variant="outlined" fullWidth />
        </Stack>
        <SendButton>Send</SendButton>
      </Stack>
    </Stack>
  );
};

export default FranchisingPage;
