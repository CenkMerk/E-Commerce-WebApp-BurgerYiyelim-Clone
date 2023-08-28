//data
import { ProductsData } from "../../constant/ProductsData";
//material ui
import { Stack, Typography } from "@mui/material";
//style
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
