import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import { Category } from "../types";

interface ICategory {
  category: Category;
}

const CategoryItem = ({ category }: ICategory) => {
  return (
    <Box
      sx={{
        width: "16rem",
        height: "19.4rem",
        backgroundColor: "#FEEFEA",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "2.5rem",
      }}
    >
      <Image
        src={category.image}
        alt="category"
        width={80}
        height={80}
        className="categoryItem__image"
      />
      <div className="categoryItem__text">
        <h3 className="categoryItem__title">{category.title}</h3>
        <p className="categoryItem__quantity">{category.quantity} Items</p>
      </div>
    </Box>
  );
};

export default CategoryItem;
