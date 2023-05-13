import React from "react";

const TopRatedItemHeader = ({ title }: { title: string }) => {
  return (
    <div>
      <h3 className="topRated__header--title">{title}</h3>
    </div>
  );
};

export default TopRatedItemHeader;
