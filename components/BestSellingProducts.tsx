import React from "react";
import BestSellingProductItem from "./BestSellingProduct";
import { BestSellingProduct } from "../types";
import { Grid } from "@mui/material";
import BestSellingItemContact from "../layouts/BestSellingItemContact";

interface IBestSellingProducts {
  bestSellers: BestSellingProduct[];
  toggleState: string;
}

const BestSellingProducts = ({
  bestSellers,
  toggleState,
}: IBestSellingProducts) => {
  // filtering products
  //   const featured = bestSellers.filter((item) => item.tag === "featured");
  const popular = bestSellers.filter((item) => item.tag === "popular");
  const newProducts = bestSellers.filter((item) => item.tag === "new");
  return (
    <div className="items__wrapper">
      <Grid
        container
        spacing={{ xs: 2, md: 8 }}
        justifyContent={"center"}
        gap={2}
      >
        {toggleState === "featured"
          ? bestSellers.map((item) => (
              <Grid item key={item.id} xs={12} sm={6} md={4} lg={3} xl={2}>
                <BestSellingProductItem item={item} />
              </Grid>
            ))
          : toggleState === "popular"
          ? popular.map((item) => (
              <Grid item key={item.id} xs={12} sm={6} md={4} lg={3} xl={2}>
                <BestSellingProductItem item={item} />
              </Grid>
            ))
          : toggleState === "new"
          ? newProducts.map((item) => (
              <Grid item key={item.id} xs={12} sm={6} md={4} lg={3} xl={2}>
                <BestSellingProductItem item={item} />
              </Grid>
            ))
          : ""}
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <BestSellingItemContact />
        </Grid>
      </Grid>
    </div>
  );
};

export default BestSellingProducts;
