import Link from "next/link";
import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const Navi = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Link href="/" className="text-light text-decoration-none fw-bolder" style={{ fontSize: "20px" }}>
            S'Game
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="https://github.com/serdargoleli" target={"_blank"}>
                Github
              </Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/serdargoleli/" target={"_blank"}>
                Linkedin
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navi;
