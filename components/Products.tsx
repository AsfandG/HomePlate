import React from "react";
import Product from "./Product";
import Slider from "react-slick";
import { ProductsArray } from "../types";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import { Box, Grid } from "@mui/material";

interface IProducts {
  products: Product[];
  toggleState: string;
}

const Products = ({ products, toggleState }: IProducts) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1090,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 890,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const vegetables = products.filter((item) => item.category === "vegetable");
  const fruits = products.filter((item) => item.category === "fruit");
  const meat = products.filter((item) => item.category === "meat");
  const tea = products.filter((item) => item.category === "tea");
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "96%" }}>
        {toggleState === "all" ? (
          <Slider {...settings}>
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </Slider>
        ) : toggleState === "vegetable" ? (
          <Grid container>
            {vegetables.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Product product={product} />
              </Grid>
            ))}
          </Grid>
        ) : toggleState === "fruit" ? (
          <Grid container>
            {fruits.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Product key={product.id} product={product} />
              </Grid>
            ))}
          </Grid>
        ) : toggleState === "meat" ? (
          <Grid container>
            {meat.map((product) => (
              <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                <Product product={product} />
              </Grid>
            ))}
          </Grid>
        ) : toggleState === "tea" ? (
          <Grid container>
            {tea.map((product) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                {" "}
                <Product key={product.id} product={product} />{" "}
              </Grid>
            ))}
          </Grid>
        ) : (
          ""
        )}
      </Box>
    </Box>
  );
};

export default Products;
