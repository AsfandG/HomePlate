import { Button } from "@mui/material";
import React from "react";

const BestSellingItemContact = () => {
  return (
    <div className="best__sellingProduct--contact">
      <div className="offer__text">
        <h2 className="offer__text--title">10% OFF</h2>
        <p className="offer__text--tag">
          For new member sign up at the first time
        </p>
      </div>
      <div className="contact__form">
        <div className="form__control">
          <label htmlFor="email" className="form__control--label">
            Email
          </label>
          <input
            type="email"
            placeholder="johndoe@gmail.com"
            className="form__control--input"
          />
        </div>
        <div className="form__control">
          <label htmlFor="password" className="form__control--label">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            className="form__control--input"
          />
        </div>
        <div className="submit__button--container">
          <Button className="submit__button--button" variant="contained">
            Register Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BestSellingItemContact;
