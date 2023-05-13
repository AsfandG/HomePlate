import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import PercentIcon from "@mui/icons-material/Percent";
import LocalMallIcon from "@mui/icons-material/LocalMall";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const navToggle = () => setOpenNav(!openNav);
  return (
    <div className="container navbar">
      <nav>
        <div className="nav__center">
          <div className="nav__header">
            <Button
              variant="contained"
              startIcon={<GridViewIcon />}
              sx={{
                backgroundImage:
                  "linear-gradient(90deg, #ff8b38 0%, #f3664b 100%)",
                textTransform: "capitalize",
                borderRadius: "2px",
                padding: ".5rem 1.9rem",
                fontSize: "1.4rem",
                fontWeight: "300",
              }}
            >
              Browse Categories
            </Button>
            <Box className="nav__toggle" onClick={navToggle}>
              <MenuIcon sx={{ fontSize: "2.3rem" }} />
            </Box>
          </div>
          <ul className={`nav__links ${openNav ? "show-links" : ""}`}>
            <li>
              <Link href="/">
                <HomeIcon /> Home
              </Link>
            </li>
            <li>
              <Link href="/">
                <LocalFireDepartmentIcon /> Hot deals
              </Link>
            </li>
            <li>
              <Link href="/">
                <PercentIcon /> Promotions
              </Link>
            </li>
            <li>
              <Link href="/">
                <LocalMallIcon /> New Products
              </Link>
            </li>
            <li className="nav__support">
              <span>1237-7777</span>24/7 support center
            </li>
          </ul>
          <Box className="support">
            <p className="support__text">
              <span>1237-7777</span>24/7 support center
            </p>
          </Box>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
