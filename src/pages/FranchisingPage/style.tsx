import { Button, TextField, styled } from "@mui/material";

export const FormInput = styled(TextField)({
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
export const SendButton = styled(Button)({
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
