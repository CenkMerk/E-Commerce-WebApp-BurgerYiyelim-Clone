import "./App.css";
import Router from "./Router";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Stack, Container } from "@mui/material";

function App() {
  return (
    <Stack
      alignItems="center"
      sx={{
        alignItems: "center",
        backgroundImage: "url('bg.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <Navbar />
      <Container>
        <Stack
          sx={{
            marginY: "50px",
            padding: "20px",
            backgroundColor: "white",
            maxWidth: "1170px",
          }}
        >
          <Router />
        </Stack>
      </Container>
      <Footer />
    </Stack>
  );
}

export default App;
