import React from "react";
import Item from "./Item";

const FooterHelp = () => {
  const links = [
    { id: 1, title: "Payments" },
    { id: 2, title: "Refund" },
    { id: 3, title: "Checkouts" },
    { id: 4, title: "Shipping" },
    { id: 5, title: "Q & A" },
    { id: 6, title: "Privacy Policy" },
  ];
  return (
    <div>
      <h4>Help Center</h4>
      <ul>
        {links.map((item) => (
          <Item key={item.id} title={item.title} />
        ))}
      </ul>
    </div>
  );
};

export default FooterHelp;
