import React from "react";
import Item from "./Item";

const FooterUseFulLinks = () => {
  const links = [
    { id: 1, title: "About us" },
    { id: 2, title: "Contact" },
    { id: 3, title: "Hot deals" },
    { id: 4, title: "Promotions" },
    { id: 5, title: "New Products" },
  ];
  return (
    <div>
      <h4>Useful links</h4>
      <ul>
        {links.map((item) => (
          <Item key={item.id} title={item.title} />
        ))}
      </ul>
    </div>
  );
};

export default FooterUseFulLinks;
