import React from "react";
import { Box } from "@mui/material";

import Image from "next/image";
import { BannerElement } from "../types";
import BannerContent from "./BannerContent";

interface IBanner {
  banner: BannerElement;
}

const BannerItem = ({ banner }: IBanner) => {
  return (
    <div className="banner">
      <BannerContent banner={banner} />
      <Box>
        <Image
          src={banner.image}
          alt="banner"
          width={190}
          height={220}
          className={"banner__Image"}
        />
      </Box>
    </div>
  );
};

export default BannerItem;
