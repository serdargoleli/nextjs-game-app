import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="text-center bg-dark text-light">
      <Container className="py-4">
        <div className="mb-2">
          Created{" "}
          <Link href={"https://github.com/serdargoleli/"} target={"_blank"}>
            Serdar Göleli
          </Link>
        </div>
        <div className="">
          Power By{" "}
          <Link className="text-muted" href={"https://www.freetogame.com/"} target={"_blank"}>
            freetogame.com
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
