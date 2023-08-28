import { ProductsData } from "../constant/ProductsData";
import { Link, Stack, Typography, styled } from "@mui/material";

const TabsXS = () => {
  return (
    <Stack display={{ xs: "flex", md: "none" }}>
      <Stack flexDirection="row" gap="5px" sx={{ overflowX: "overlay" }}>
        {ProductsData.map((item, index) => (
          <TabsLink key={index} href={`#category-${item.id}`}>
            {item.icon}
            <Typography noWrap={true}>{item.categoryName}</Typography>
          </TabsLink>
        ))}
      </Stack>
    </Stack>
  );
};
const TabsLink = styled(Link)({
  backgroundColor: "#940c00",
  borderRadius:"10px",
  color: "white",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  gap: "5px",
  padding: "10px",
  borderBottom: "1px solid #eaebeb",
  ":hover": {
    color: "#f30",
  },
});
export default TabsXS;
