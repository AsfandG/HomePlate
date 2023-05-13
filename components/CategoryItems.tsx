import React from "react";
import CategoryItem from "./CategoryItem";
import Slider from "react-slick";
import { Box } from "@mui/material";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import { CategoriesArray, Category } from "../types";

interface ICategoryItems {
  categories: Category[];
  value: string;
}
const CategoryItems = ({ categories, value }: ICategoryItems) => {
  const vegetables = categories.filter((item) => item.category === "vegetable");
  const fruits = categories.filter((item) => item.category === "fruit");
  const meat = categories.filter((item) => item.category === "meat");
  const tea = categories.filter((item) => item.category === "tea");

  var settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 8,
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

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // border: "1px solid black",
      }}
    >
      <Box sx={{ width: "100%", marginLeft: "1rem" }}>
        {value === "all" ? (
          <Slider {...settings}>
            {categories.map((category) => (
              <CategoryItem key={category.id} category={category} />
            ))}
          </Slider>
        ) : (
          ""
        )}
        {value === "vegetable" ? (
          <Slider {...settings}>
            {vegetables.map((category) => (
              <CategoryItem key={category.id} category={category} />
            ))}
          </Slider>
        ) : (
          ""
        )}
        {value === "fruit" ? (
          <Slider {...settings}>
            {fruits.map((category) => (
              <CategoryItem key={category.id} category={category} />
            ))}
          </Slider>
        ) : (
          ""
        )}
        {value === "meat" ? (
          <Slider {...settings}>
            {" "}
            {meat.map((category) => (
              <CategoryItem key={category.id} category={category} />
            ))}
          </Slider>
        ) : (
          ""
        )}
        {value === "tea" ? (
          <Slider {...settings}>
            {tea.map((category) => (
              <CategoryItem key={category.id} category={category} />
            ))}
          </Slider>
        ) : (
          ""
        )}
        {/* </Slider> */}
      </Box>
    </Box>
  );
};

export default CategoryItems;
