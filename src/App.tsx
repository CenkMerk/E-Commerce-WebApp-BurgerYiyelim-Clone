import "./App.css";
import Router from "./Router";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Stack } from "@mui/material";

function App() {
  return (
    <Stack alignItems="center">
      <Navbar />
      <Router />
      <Footer />
    </Stack>
  );
}

export default App;
