import TabsMD from "../../components/TabsMD/TabsMD";
import { Stack } from "@mui/material";
import Products from "../../components/Products/Products";
import ShoppingCart from "../../components/ShoppingCartMD/ShoppingCartMD";
import TabsXS from "../../components/TabsXS/TabsXS";
import ShoppingCartXS from "../../components/ShoppingCartXS/ShoppingCartXS";

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
