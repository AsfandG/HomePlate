import { Box, Button } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";

const TopNav = () => {
  return (
    <section className="container topNav">
      <Box
        py={2}
        sx={{ display: "flex", alignItems: "flex-end", gap: "1.5rem" }}
      >
        <MenuIcon sx={{ fontSize: "2.3rem" }} />
        <Image src="/images/Logo.png" alt="Logo" width={40} height={40} />
      </Box>
      <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Button
          variant="text"
          size="small"
          sx={{
            color: "#556987",
            textTransform: "capitalize",
            fontSize: "1.5rem",
            fontWeight: "400",
            "&:hover": { backgroundColor: "transparent" },
          }}
        >
          Login
        </Button>
        <Button
          size="small"
          variant="contained"
          sx={{
            backgroundImage: "linear-gradient(90deg, #ff8b38 0%, #f3664b 100%)",
            textTransform: "capitalize",
            borderRadius: "6px",
            padding: ".5rem 1.9rem",
            fontSize: "1.5rem",
            fontWeight: "400",
          }}
        >
          Signup
        </Button>
      </Box>
    </section>
  );
};

export default TopNav;
