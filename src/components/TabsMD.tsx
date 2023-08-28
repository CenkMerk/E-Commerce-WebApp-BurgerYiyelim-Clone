import { Link, Stack, Typography, styled } from "@mui/material";
import { ProductsData } from "../constant/ProductsData";

const TabsMD = () => {
  return (
    <Stack display={{ xs: "none", md: "flex" }}>
      <Stack bgcolor="white" borderRadius="5px" minWidth="200px">
        <Typography variant="h6" padding="10px">
          PRODUCTS
        </Typography>
        {ProductsData.map((item, index) => (
          <TabsLink key={index} href={`#category-${item.id}`}>
            {item.icon}
            {item.categoryName}
          </TabsLink>
        ))}
      </Stack>
    </Stack>
  );
};

const TabsLink = styled(Link)({
  color: "#414551",
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

export default TabsMD;
