import React, { useState } from "react";
import SellsSectionHeader from "./SellsSectionHeader";
import BestSellingProducts from "./BestSellingProducts";
import { BestSellingProduct } from "../types";

interface IDailySells {
  bestSellers: BestSellingProduct[];
}

const DailySells = ({ bestSellers }: IDailySells) => {
  const [toggleState, setToggleState] = useState("featured");
  const toggleTab = (value: string) => {
    console.log("Toggling tab >>", value);
    setToggleState(value);
  };
  return (
    <div className="container">
      <div className="sells__section">
        <SellsSectionHeader toggleTab={toggleTab} toggleState={toggleState} />
        <BestSellingProducts
          toggleState={toggleState}
          bestSellers={bestSellers}
        />
      </div>
    </div>
  );
};

export default DailySells;
