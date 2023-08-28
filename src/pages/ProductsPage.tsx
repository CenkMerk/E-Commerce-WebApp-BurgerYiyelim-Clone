import TabsMD from "../components/TabsMD";
import { Stack } from "@mui/material";
import Products from "../components/Products";
import ShoppingCart from "../components/ShoppingCart";
import TabsXS from "../components/TabsXS";

const ProductsPage = () => {
  return (
    <Stack
      flexDirection={{ sx: "column", md: "row" }}
      justifyContent="space-between"
      gap="20px"
    >
      <TabsMD />
      <TabsXS />
      <Products />
      <ShoppingCart />
    </Stack>
  );
};

export default ProductsPage;
