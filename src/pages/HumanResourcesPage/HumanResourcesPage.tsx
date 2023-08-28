import { Stack, Typography } from "@mui/material";
import { FormInput, SendButton } from "./style";

const HumanResourcesPage = () => {
  return (
    <Stack bgcolor="white" padding="20px">
      <Stack position="relative">
        <img src="hr.png" alt="" />
        <Typography
          fontSize={{ xs: "40px", sm: "70px" }}
          color="white"
          position="absolute"
          bottom="-15px"
          right="0px"
        >
          Human Resources
        </Typography>
      </Stack>
      <Stack gap="20px" marginTop="20px">
        <Typography variant="h5" gutterBottom color="#db1e38">
          Job Application Form
        </Typography>
        <FormInput label="Name Surname" variant="outlined" />
        <FormInput label="Position" variant="outlined" />
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

export default HumanResourcesPage;
