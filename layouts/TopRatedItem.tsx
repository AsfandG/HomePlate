import { Rating, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { Category } from "../types";

interface ITopSells {
  category: Category;
}

const TopRatedItem = ({ category }: ITopSells) => {
  const [value, setValue] = React.useState<number | null>(2);
  return (
    <div className="topRated__item">
      <div className="topRated__item--image">
        <Image src={category.image} width={66} height={66} alt="product" />
      </div>
      <div className="topRated__item--content">
        <div className="item__info">
          <h3 className="item__title">{category.title}</h3>
          <div className="item__rating">
            <Rating name="read-only" value={value} readOnly />
            <span>(4)</span>
          </div>
        </div>
        <div className="item__price">
          <Typography sx={{ color: "#ff8b38", fontSize: "1.5rem" }}>
            $2
          </Typography>
          <Typography
            sx={{ fontSize: "1.2rem", textDecoration: "line-through" }}
          >
            $4
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default TopRatedItem;
