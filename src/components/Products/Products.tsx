import { Stack, Typography } from "@mui/material";
import { ProductsData } from "../../constant/ProductsData";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cartSlice";
import { AddButton, ProductStack, StackContainer } from "./style";

const Products = () => {
  const dispatch = useDispatch();
  return (
    <Stack gap="20px">
      {ProductsData.map((item, index) => (
        <StackContainer key={index} id={`category-${item.id}`}>
          <Typography variant="h6" gutterBottom>
            {item.categoryName}
          </Typography>
          <Stack flexDirection={{ xs: "column", sm: "row" }} gap="10px">
            {item.products.map((product, index) => (
              <ProductStack key={index}>
                <img src={`${product.img}`} alt="" width="100%" />
                <Typography variant="subtitle1">
                  {product.productName}
                </Typography>
                <Stack
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="h6">₺{product.price}</Typography>
                  <AddButton
                    aria-label="Add"
                    onClick={() => dispatch(addItem(product))}
                  >
                    <AiOutlinePlus />
                  </AddButton>
                </Stack>
              </ProductStack>
            ))}
          </Stack>
        </StackContainer>
      ))}
    </Stack>
  );
};

export default Products;
