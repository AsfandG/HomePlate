import React from "react";
import FooterAbout from "../layouts/FooterAbout";
import { Contact } from "../types";
import FooterAccount from "../layouts/FooterAccount";
import FooterUseFulLinks from "../layouts/FooterUseFulLinks";
import FooterHelp from "../layouts/FooterHelp";
import { Grid } from "@mui/material";

interface IFooterProps {
  contact: Contact[];
}

const Footer = ({ contact }: IFooterProps) => {
  return (
    <footer className="container">
      <Grid container justifyContent={"space-between"}>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <FooterAbout contact={contact} />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <FooterAccount />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <FooterUseFulLinks />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <FooterHelp />
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
