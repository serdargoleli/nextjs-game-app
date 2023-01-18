import React from "react";
import Navi from "@/components/Navi";
import { Container } from "react-bootstrap";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navi />
      {children}
    </React.Fragment>
  );
};

export default Layout;
