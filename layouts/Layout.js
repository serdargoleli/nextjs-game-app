import React from "react";
import Navi from "@/components/Navi";
import { Container } from "react-bootstrap";
import Footer from "@/components/Footer";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navi />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
