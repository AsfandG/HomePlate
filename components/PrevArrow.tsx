import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box } from "@mui/material";

const PrevArrow = ({ onClick }: any) => {
  return (
    <div>
      <Box onClick={onClick} className="prev__arrow">
        <ArrowBackIcon className="prev__arrow--icon" />
      </Box>
    </div>
  );
};

export default PrevArrow;
