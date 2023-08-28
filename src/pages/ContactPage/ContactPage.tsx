import { Stack, Typography } from "@mui/material";
import { FormInput, SendButton, StackContainer } from "./style";
const ContactPage = () => {
  return (
    <StackContainer>
      <Typography variant="h4" gutterBottom>
        Burger Yiyelim
      </Typography>
      <Typography variant="h5" gutterBottom>
        Write Us
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
      <FormInput label="Subject" variant="outlined" />
      <FormInput label="Your Message" variant="outlined" />
      <SendButton>Send</SendButton>
    </StackContainer>
  );
};

export default ContactPage;
