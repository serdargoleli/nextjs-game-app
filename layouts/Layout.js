import Nav from "@/components/navbar";
import { Container } from "@chakra-ui/react";

import React from "react";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Nav />
      <Container pt={"4"} maxW={"1300px"}>{children}</Container>
    </React.Fragment>
  );
};

export default Layout;
