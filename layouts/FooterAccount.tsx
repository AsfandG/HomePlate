import React from "react";
import Item from "./Item";

const FooterAccount = () => {
  const accountList = [
    { id: 1, title: "WishList" },
    { id: 2, title: "Cart" },
    { id: 3, title: "Track order" },
    { id: 4, title: "Shipping Details" },
  ];
  return (
    <div>
      <h4>Account</h4>
      <ul className="account">
        {accountList.map((account) => (
          <Item key={account.id} title={account.title} />
        ))}
      </ul>
    </div>
  );
};

export default FooterAccount;
