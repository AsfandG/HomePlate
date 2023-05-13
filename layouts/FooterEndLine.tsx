import Image from "next/image";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
const FooterEndLine = () => {
  return (
    <div className="container">
      <div className="footer__endLine">
        <p>&copy; 2023. All rights reserved</p>
        <Image
          src={"/images/Payment.png"}
          width={224}
          height={32}
          alt="payment-cards"
        />

        <div className="footer__endLine--social-links">
          <FacebookIcon />
          <LinkedInIcon />
          <InstagramIcon />
          <TwitterIcon />
        </div>
      </div>
    </div>
  );
};

export default FooterEndLine;
