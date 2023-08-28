//material ui
import { Stack, Typography } from "@mui/material";
//data
import { ProductsData } from "../../constant/ProductsData";
//style
import { TabsLink, StackContainer } from "./style";

const TabsMD = () => {
  return (
    <Stack display={{ xs: "none", md: "flex" }}>
      <StackContainer>
        <Typography variant="h6" padding="10px">
          PRODUCTS
        </Typography>
        {ProductsData.map((item, index) => (
          <TabsLink key={index} href={`#category-${item.id}`}>
            {item.icon}
            {item.categoryName}
          </TabsLink>
        ))}
      </StackContainer>
    </Stack>
  );
};

export default TabsMD;
