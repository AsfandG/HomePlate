import React from "react";
import { Box, Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="container">
      <div className="hero__section">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
          className="hero__section--left"
        >
          <h2 className="hero__section--title">
            From your favorite <br /> spots, food delivered,
            <br /> hot to hot.
          </h2>
          <p className="hero__section--tagLine">
            Food, drinks, groceries, and more available for delivery and pickup.
          </p>
          <div className="hero__section--inputBox">
            <input type="text" placeholder="Street, City, State" />
            <Button
              variant="text"
              startIcon={<MyLocationIcon />}
              sx={{
                color: "#BBC3CF",
                padding: "0 .5rem",
                textTransform: "capitalize",
                fontSize: "1rem",
              }}
            >
              Locate me
            </Button>
            <Button
              variant="contained"
              endIcon={<ExpandMoreIcon />}
              sx={{
                backgroundImage:
                  "linear-gradient(90deg, #ff8b38 0%, #f3664b 100%)",
                textTransform: "capitalize",
              }}
            >
              Delivery
            </Button>
          </div>

          <div className="hero__section--subscription">
            <span>Sign In </span>for your recent addresses
          </div>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="hero__section--right"
        >
          <div className="hero__section--foodImage"></div>
        </Box>
      </div>
    </div>
  );
};

export default HeroSection;
