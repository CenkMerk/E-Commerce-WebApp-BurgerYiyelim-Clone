import { Button, Stack, TextField, Typography, styled } from "@mui/material";

const ContactPage = () => {
  return (
    <Stack color="#db1e38" gap="20px">
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
    </Stack>
  );
};
const FormInput = styled(TextField)({
  "& label.Mui-focused": {
    color: "#db1e38",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E3E7",
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6F7E8C",
    },
  },
});
const SendButton = styled(Button)({
  backgroundColor: "#db1e38",
  color: "white",
  border: "none",
  padding: "10px 0px",
  fontWeight: "700",
  fontSize: "18px",
  marginTop: "20px",
  ":hover": {
    backgroundColor: "#db1e38",
    opacity: "0.9",
  },
});
export default ContactPage;
