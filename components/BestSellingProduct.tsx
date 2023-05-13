import { Box, Button, Rating } from "@mui/material";
import Image from "next/image";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { BestSellingProduct } from "../types";

const BestSellingProductItem = ({ item }: { item: BestSellingProduct }) => {
  const [value, setValue] = React.useState<number | null>(2);
  return (
    <Box className="best__sellingProduct">
      <div className="best__sellingProduct--image">
        <Image
          src={item.image}
          width={200}
          height={154}
          alt="best-selling Product"
        />
      </div>
      <div className="best__sellingProduct--info">
        <div className="best__item--header">
          <div className="best__item--category">{item.category}</div>
          <h3 className="best__item--title">{item.title}</h3>
        </div>

        <div className="best__item--rating">
          <div className="rating__stars">
            <Rating name="read-only" value={value} readOnly /> <span>(4)</span>
          </div>
          <div className="best__item--owner">
            By: <span>Mr. food</span>
          </div>
        </div>
        <div className="best__item--price">
          <span className="new-price">${item.newPrice}</span>
          <span className="old-price">${item.oldPrice}</span>
        </div>
        <div className="best__item--sold">
          Sold:{" "}
          <span>
            {item.itemsSold}/{item.totalItems}
          </span>
        </div>
        <Button
          variant="contained"
          className="best__item--cartButton"
          startIcon={<ShoppingCartIcon className="best__item--cartIcon" />}
        >
          Add to cart
        </Button>
      </div>
    </Box>
  );
};

export default BestSellingProductItem;
