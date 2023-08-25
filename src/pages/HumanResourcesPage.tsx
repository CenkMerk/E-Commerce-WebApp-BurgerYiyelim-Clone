import { Button, Stack, TextField, Typography, styled } from "@mui/material";

const HumanResourcesPage = () => {
  return (
    <>
      <Stack position="relative">
        <img src="hr.png" alt="" />
        <Typography
          variant="h2"
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
    </>
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
export default HumanResourcesPage;
