import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import Products from "./Products";
import { ProductsArray } from "../types";

const ProductSection = ({ products }: ProductsArray) => {
  const [toggleState, setToggleState] = useState("all");
  const toggleTab = (value: string) => {
    setToggleState(value);
  };
  return (
    <div className="container">
      <div className="product__section">
        <SectionHeader
          title="Featured Products"
          toggleState={toggleState}
          toggleTab={toggleTab}
        />
        <Products toggleState={toggleState} products={products} />
      </div>
    </div>
  );
};

export default ProductSection;
