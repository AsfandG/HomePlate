import React from "react";
import DealItem from "../layouts/DealItem";
import { Grid } from "@mui/material";
import SellIcon from "@mui/icons-material/Sell";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const DealSection = () => {
  return (
    <div className="container">
      <div className="deal__container">
        <Grid
          container
          spacing={4}
          sx={{ display: "flex", justifyContent: "space-around" }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            display={"flex"}
            justifyContent={"center"}
          >
            <DealItem
              title="Best Prices & Deals"
              text="Don't miss our daily amazing deals and prices"
              // DealMouse={<SellIcon />}
              Icon={<SellIcon className="dealItem__section--icon" />}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            display={"flex"}
            justifyContent={"center"}
          >
            <DealItem
              title="Refundable"
              text="If your items have damage we agree to refund it"
              Icon={
                <PublishedWithChangesIcon className="dealItem__section--icon" />
              }
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            display={"flex"}
            justifyContent={"center"}
          >
            <DealItem
              title="Free delivery"
              text="Do purchase over $50 and get free delivery anywhere"
              Icon={<LocalShippingIcon className="dealItem__section--icon" />}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default DealSection;
