import { Box, Tabs, Tab, useMediaQuery } from "@mui/material";
import { useState } from "react";

interface IHeaderProps {
  title: string;
  toggleState: string;
  toggleTab: (value: string) => void;
}

const SectionHeader = ({ title, toggleTab, toggleState }: IHeaderProps) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  return (
    <div className="section__header">
      <h1 className="section__header--title">{title}</h1>
      <Box>
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
            className={`tab ${toggleState === "all" ? "active__tab" : ""}`}
            onClick={() => toggleTab("all")}
          >
            All
          </span>
          <span
            className={`tab ${
              toggleState === "vegetable" ? "active__tab" : ""
            }`}
            onClick={() => toggleTab("vegetable")}
          >
            Vegetable
          </span>
          <span
            className={`tab ${toggleState === "fruit" ? "active__tab" : ""}`}
            onClick={() => toggleTab("fruit")}
          >
            Fruits
          </span>
          <span
            className={`tab ${toggleState === "meat" ? "active__tab" : ""}`}
            onClick={() => toggleTab("meat")}
          >
            Meat
          </span>
          <span
            className={`tab ${toggleState === "tea" ? "active__tab" : ""}`}
            onClick={() => toggleTab("tea")}
          >
            Tea
          </span>
        </Box>
      </Box>
    </div>
  );
};

export default SectionHeader;
