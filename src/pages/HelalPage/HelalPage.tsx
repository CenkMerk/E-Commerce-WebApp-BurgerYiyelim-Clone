import { Stack, Typography } from "@mui/material";

const HelalPage = () => {
  return (
    <Stack bgcolor="white" padding="20px">
      <Stack position="relative">
        <img src="helalpage.png" alt="" />
        <Typography
          variant="h2"
          color="white"
          position="absolute"
          bottom="-15px"
          right="0px"
        >
          HALAL
        </Typography>
      </Stack>
      <Stack gap="20px" marginTop="20px">
        <Typography variant="h5" gutterBottom color="#db1e38">
          Halal Certificate
        </Typography>
        <Typography variant="body2">
          Keban Et bünyesinde satış gerçekleştiren tüm şubeler, ürünlerini helal
          et sertifikası olan tedarikçilerden temin etmektedir.
        </Typography>
        <Typography variant="body2">
          Tedarikçilerimize ait helal et üretim sertifikalarını aşağıda
          görüntüleyebilirsiniz, üzerlerine tıklayarak büyütebilirsiniz.
        </Typography>
        <Stack width={{ xs: "100%", sm: "50%" }}>
          <img src="helaldoc.png" alt="" width="100%" />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default HelalPage;
