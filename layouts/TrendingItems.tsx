import React from "react";
import TopRatedItemHeader from "../layouts/TopRatedItemHeader";
import TopRatedItem from "../layouts/TopRatedItem";
import { Category } from "../types";

interface ITopSells {
  categories: Category[];
}

const TrendingItems = ({ categories }: ITopSells) => {
  return (
    <div className="top__sells">
      <TopRatedItemHeader title="Trending Items" />
      {categories.slice(0, 3).map((category) => (
        <TopRatedItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default TrendingItems;
