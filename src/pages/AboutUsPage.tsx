import { Stack, Typography, Container } from "@mui/material";
import React from "react";
import { AboutUsTexts } from "../constant/AboutUsTexts";

const AboutUsPage = () => {
  return (
    <>
      <Stack position="relative">
        <img src="hakkimizdaimg.png" alt="" />
        <Typography
          variant="h2"
          color="white"
          position="absolute"
          bottom="-15px"
          right="0px"
        >
          ABOUT US
        </Typography>
      </Stack>
      <Stack gap="10px">
        <Typography variant="h3">Burger Yiyelim</Typography>
        <br />
        <Typography variant="body2">{AboutUsTexts[0]}</Typography>
        <Typography variant="body2">{AboutUsTexts[1]}</Typography>
        <Typography variant="body2">{AboutUsTexts[2]}</Typography>
        <Typography variant="body2">{AboutUsTexts[3]}</Typography>
        <Typography variant="body2">{AboutUsTexts[4]}</Typography>
        <Typography variant="h6">NEDEN UYGUN FİYAT?</Typography>
        <Typography variant="body2">{AboutUsTexts[5]}</Typography>
        <Typography variant="h6">KÖFTELERİNİZ HELAL Mİ?</Typography>
        <Typography variant="body2">{AboutUsTexts[6]}</Typography>
      </Stack>
    </>
  );
};

export default AboutUsPage;
