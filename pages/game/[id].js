import axios from "axios";
import Head from "next/head";
import React from "react";
import { Badge, Button, Carousel, Col, Container, Row } from "react-bootstrap";

const GameDetails = ({ data }) => {
  console.log(data);
  return (
    <div className="text-dark">
      <Head>
        <title>
          {data.title} | {data.description}
        </title>
      </Head>
      <div className="bg-light text-dark pb-4">
        <Container className="py-5">
          <Row className="d-flex flex-column-reverse flex-md-row">
            <Col xs={"12"} md={"7"}>
              <div className="pe-3">
                <Badge bg="success">{data.genre}</Badge>
                <h1>{data.title}</h1>
                <h6 className="lead">{data.short_description}</h6>
                <p className="text-muted" style={{ fontSize: "14px" }}>
                  {" "}
                  {data.description}{" "}
                </p>
                <Button target="_blank" href={data.game_url}>
                  Play To Game
                </Button>
              </div>
            </Col>

            <Col xs={"12"} md={"5"} className="d-flex align-items-center mb-4 mb-md-0">
              <img className="rounded w-100" src={data.thumbnail} alt={data.title} />
            </Col>
          </Row>
        </Container>
      </div>

      {/* SCREENSHOTS */}
      {data.screenshots.length > 0 && (
        <Container className="py-5">
          <Carousel fade>
            {data.screenshots.map((item) => (
              <Carousel.Item>
                <img className="d-block w-100 rounded" src={item.image} alt={data.title} />
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      )}

      {/* INFO */}
      <div className="bg-light text-dark ">
        <Container className="py-5">
          <Row>
            <Col xs={"12"} md={!data.minimum_system_requirements ? "12" : "7"}>
              <div className={!data.minimum_system_requirements ? "d-flex justify-content-between flex-column flex-md-row" : ""}>
                {textBox("Publisher", data.publisher)}
                {textBox("Developer", data.developer)}
                {textBox("Release Date", data.release_date)}
                {textBox("Status", data.status)}
                {textBox("Platform", data.platform, "mb-0")}
              </div>
            </Col>
            {data.minimum_system_requirements && (
              <Col xs={"12"} md={"5"} className="mt-5 mt-md-0">
                <h4 className="d-md-none fw-bolder text-dark">{"minimum system requirements".toUpperCase()}</h4>
                {textBox("Os", data.minimum_system_requirements.os)}
                {textBox("Processor", data.minimum_system_requirements.processor)}
                {textBox("Memory", data.minimum_system_requirements.memory)}
                {textBox("Graphics", data.minimum_system_requirements.graphics)}
                {textBox("Storage", data.minimum_system_requirements.storage, "mb-0")}
              </Col>
            )}
          </Row>
        </Container>
      </div>
    </div>
  );
};

const textBox = (key, value, mb = "mb-4") => {
  return (
    <div className={mb}>
      <p className={` fw-bold mb-0`}>{value}</p>
      <h6 className="text-muted mb-0">{key}</h6>
    </div>
  );
};

export default GameDetails;

export const getServerSideProps = async (contenx) => {
  const { data } = await axios.get(`https://www.freetogame.com/api/game?id=${contenx.params.id}`);

  return { props: { data: data } };
};
