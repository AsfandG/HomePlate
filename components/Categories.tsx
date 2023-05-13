import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import CategoryItems from "./CategoryItems";
import { CategoriesArray } from "../types";

const Categories = ({ categories }: CategoriesArray) => {
  const [toggleState, setToggleState] = useState("all");
  const toggleTab = (value: string) => {
    setToggleState(value);
  };

  return (
    <div className="container">
      <SectionHeader
        title="Categories"
        toggleState={toggleState}
        toggleTab={toggleTab}
      />
      <CategoryItems value={toggleState} categories={categories} />
    </div>
  );
};

export default Categories;
