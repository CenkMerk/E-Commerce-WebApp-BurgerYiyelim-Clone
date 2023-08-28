import TabsMD from "../components/TabsMD";
import { Stack } from "@mui/material";
import Products from "../components/Products";
import ShoppingCart from "../components/ShoppingCartMD";
import TabsXS from "../components/TabsXS";
import ShoppingCartXS from "../components/ShoppingCartXS";

const ProductsPage = () => {
  return (
    <Stack
      flexDirection={{ sx: "column", md: "row" }}
      justifyContent="space-between"
      gap="20px"
      
    >
      <ShoppingCartXS/>
      <TabsMD />
      <TabsXS />
      <Products />
      <ShoppingCart />
    </Stack>
  );
};

export default ProductsPage;
