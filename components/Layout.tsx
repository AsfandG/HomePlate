import React, { ReactNode } from "react";
import TopNav from "./TopNav";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <TopNav />
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
