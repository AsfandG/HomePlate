import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box } from "@mui/material";

const NextArrow = ({ onClick }: any) => {
  return (
    <div>
      <Box onClick={onClick} className="next__arrow">
        <ArrowForwardIcon className="next__arrow--icon" />
      </Box>
    </div>
  );
};

export default NextArrow;
