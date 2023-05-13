import React from "react";
import BannerItem from "./BannerItem";
import { BannerElement } from "../types";

interface IBanner {
  banners: BannerElement[];
}

const BannerSection = ({ banners }: IBanner) => {
  return (
    <div className="container">
      <div className="banner__section">
        {banners.map((banner) => (
          <BannerItem key={banner.id} banner={banner} />
        ))}
      </div>
    </div>
  );
};

export default BannerSection;
