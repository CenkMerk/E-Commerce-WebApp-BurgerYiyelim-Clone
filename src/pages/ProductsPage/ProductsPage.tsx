//components
import TabsMD from "../../components/TabsMD/TabsMD";
import Products from "../../components/Products/Products";
import ShoppingCart from "../../components/ShoppingCartMD/ShoppingCartMD";
import TabsXS from "../../components/TabsXS/TabsXS";
import ShoppingCartXS from "../../components/ShoppingCartXS/ShoppingCartXS";
//material ui
import { Stack } from "@mui/material";

const ProductsPage = () => {
  return (
    <Stack
      flexDirection={{ sx: "column", md: "row" }}
      justifyContent="space-between"
      gap="20px"
    >
      <ShoppingCartXS />
      <TabsMD />
      <TabsXS />
      <Products />
      <ShoppingCart />
    </Stack>
  );
};

export default ProductsPage;
