import { IconButton, Stack, Typography, styled } from "@mui/material";
import { ProductsData } from "../constant/ProductsData";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";

const Products = () => {
  const dispatch = useDispatch();
  return (
    <Stack gap="20px">
      {ProductsData.map((item, index) => (
        <Stack
          key={index}
          id={`category-${item.id}`}
          bgcolor="white"
          borderRadius="2px"
          padding="10px"
        >
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
        </Stack>
      ))}
    </Stack>
  );
};
const AddButton = styled(IconButton)({
  borderRadius: "5px",
  backgroundColor: "#f8f8f8",
  ":hover": {
    backgroundColor: "white",
  },
});
const ProductStack = styled(Stack)({
  gap: "10px",
  backgroundColor: "white",
  padding: "10px",
  borderRadius: "2px",
  ":hover": {
    backgroundColor: "#f8f8f8",
    cursor: "pointer",
  },
});
export default Products;
