import Nav from "@/components/navbar";

import React from "react";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Nav />
      {children}
    </React.Fragment>
  );
};

export default Layout;
