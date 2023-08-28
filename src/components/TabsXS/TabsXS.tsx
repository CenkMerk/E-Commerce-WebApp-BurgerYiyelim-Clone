import { ProductsData } from "../../constant/ProductsData";
import { Stack, Typography } from "@mui/material";
import { TabsLink, StackContainer } from "./style";

const TabsXS = () => {
  return (
    <Stack display={{ xs: "flex", md: "none" }}>
      <StackContainer sx={{ overflowX: "overlay" }}>
        {ProductsData.map((item, index) => (
          <TabsLink key={index} href={`#category-${item.id}`}>
            {item.icon}
            <Typography noWrap={true}>{item.categoryName}</Typography>
          </TabsLink>
        ))}
      </StackContainer>
    </Stack>
  );
};
export default TabsXS;
