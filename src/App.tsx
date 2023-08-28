import Router from "./Router";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { Stack, Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotal } from "./redux/cartSlice";
import { RootState } from "./redux/store";
import { useEffect } from "react";

function App() {
  const selectItem = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [selectItem]);

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
