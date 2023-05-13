import React from "react";
import TopSells from "./TopSells";
import { Category } from "../types";
import TopRated from "./TopRated";
import TrendingItems from "../layouts/TrendingItems";
import RecentlyAdded from "../layouts/RecentlyAdded";
import { Grid } from "@mui/material";

interface ITopRated {
  categories: Category[];
}

const TopRatedProducts = ({ categories }: ITopRated) => {
  return (
    <div className="container">
      <div className="topRated__main">
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <TopSells categories={categories} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <TopRated categories={categories} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <TrendingItems categories={categories} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <RecentlyAdded categories={categories} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default TopRatedProducts;
