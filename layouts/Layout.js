import Nav from "@/components/navbar";
import { Box, Container } from "@chakra-ui/react";
import React from "react";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Nav />
      <Box w={"100%"}>
        <Container maxW="container.xl" pt={"4"} w={"100%"}>
          {children}
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default Layout;
