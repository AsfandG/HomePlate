import React from "react";
import { Box, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { BannerElement } from "../types";

interface IBanner {
  banner: BannerElement;
}
const BannerContent = ({ banner }: IBanner) => {
  return (
    <Box className="banner__content">
      <div className="banner__content--offer">{banner.offer}</div>
      <h3 className="banner__content--title">{banner.title} </h3>
      <p className="banner__content--text">{banner.description}</p>
      <Button
        variant="contained"
        size="small"
        sx={{
          fontSize: "1.2rem",
          backgroundImage: "linear-gradient(90deg, #ff8b38 0%, #f3664b 100%)",
          padding: "7px 14px",
          borderRadius: "2px",
          textTransform: "capitalize",
          fontWeight: "400",
        }}
        endIcon={<ArrowForwardIcon className="banner__icon" />}
      >
        Shop Now
      </Button>
    </Box>
  );
};

export default BannerContent;
