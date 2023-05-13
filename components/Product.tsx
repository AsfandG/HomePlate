import React from "react";
import { Box, Rating, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Image from "next/image";
import { Product } from "../types";

interface IProduct {
  product: Product;
}

const Product = ({ product }: IProduct) => {
  const [value, setValue] = React.useState<number | null>(2);
  return (
    <Box
      sx={{
        width: "22.8rem",
        height: "30.22rem",
        border: "1px solid rgba(173, 173, 173, 0.25)",
      }}
    >
      <div className="product__image">
        <Image src={product.image} alt="product" width={220} height={144} />
      </div>
      <div className="product__info">
        <p className="product__category--text">{product.category}</p>
        <h3 className="product__title">{product.title}</h3>
        <div className="product__rating">
          <div className="product__rating--stars">
            <Rating
              name="simple-controlled"
              value={value}
              size="large"
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <span>(4)</span>
          </div>
          <p className="product__owner">
            By: <span>Mr.Food</span>
          </p>
        </div>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          className="product__price"
        >
          <Box
            sx={{
              display: "flex",
              gap: "1.5rem",
              fontSize: "1.6rem",
              color: "#ff8b38",
            }}
          >
            ${product.newprice}
            <Box
              sx={{
                textDecoration: "line-through",
                fontSize: "1.4rem",
                color: "#bbc3cf",
              }}
            >
              ${product.oldprice}
            </Box>
          </Box>
          <Button
            variant="contained"
            size="small"
            sx={{
              textTransform: "capitalize",
              backgroundColor: "#DEF9EC",
              color: "#ff8b38",
              fontSize: "1.4rem",
              fontWeight: "400",
              padding: ".7rem 1.4rem",
              borderRadius: "2px",
              "&:hover": { backgroundColor: "#DEF9EC" },
            }}
            startIcon={<ShoppingCartIcon />}
          >
            Add
          </Button>
        </Box>
      </div>
    </Box>
  );
};

export default Product;
