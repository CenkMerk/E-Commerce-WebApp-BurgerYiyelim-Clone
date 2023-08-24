import { HomePageData } from "../constant/HomePageData";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Stack>
      <Grid
        container
        spacing={4}
        maxWidth="1170px"
        alignItems="center"
        paddingY="50px"
      >
        {HomePageData.map((item, index) => (
          <Grid item key={index} xs={item.xs} sm={item.sm} md={item.md}>
            <Box
              position="relative"
              sx={{ cursor: "pointer" }}
              onClick={() => navigate(`${item.navigate}`)}
            >
              <img
                src={`${item.img}`}
                alt=""
                width="100%"
                style={{ maxHeight: "400px", objectFit: "cover" }}
              />
              {item.text && (
                <Typography
                  sx={{
                    transform: "translate(-50%, -50%)",
                  }}
                  variant="h4"
                  color="white"
                  position="absolute"
                  top="50%"
                  left="50%"
                  fontWeight="700"
                  textAlign="center"
                >
                  {item.text}
                </Typography>
              )}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default HomePage;
