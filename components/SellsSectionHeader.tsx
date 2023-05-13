import { Box } from "@mui/material";
import React from "react";

interface ISells {
  toggleTab: (value: string) => void;
  toggleState: string;
}

const SellsSectionHeader = ({ toggleTab, toggleState }: ISells) => {
  return (
    <Box className="sells__section--header">
      <h3 className="sells__section--title">Daily Best Sells</h3>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          fontSize: "1.6rem",
        }}
        className="tabs__block"
      >
        <span
          className={`tab ${
            toggleState === "featured" ? "active__bestSeller" : ""
          }`}
          onClick={() => toggleTab("featured")}
        >
          Featured
        </span>
        <span
          className={`tab ${
            toggleState === "popular" ? "active__bestSeller" : ""
          }`}
          onClick={() => toggleTab("popular")}
        >
          Popular
        </span>
        <span
          className={`tab ${toggleState === "new" ? "active__bestSeller" : ""}`}
          onClick={() => toggleTab("new")}
        >
          New
        </span>
      </Box>

      <div className="sells__section--expire">
        Expires in : <span>9:34:21</span>
      </div>
    </Box>
  );
};

export default SellsSectionHeader;
