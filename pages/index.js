import axios from "axios";
import { gamesAction } from "@/store/games-slice";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Col, Container, Row, Dropdown, Form, DropdownToggle } from "react-bootstrap";
import GameCard from "@/components/GameCard";
import { useState } from "react";

const Home = ({ data }) => {
  const dispatcher = useDispatch();
  dispatcher(gamesAction.setGames(data));
  const gamesState = useSelector((state) => state.games.games); //storedan oyunları çek
  const viewGame = useSelector((state) => state.games.viewGame); // stordan limit sayısını çek
  const platform = useSelector((state) => state.games.platform); // stordan platform çek
  const [filteredData, setFilteredData] = useState([]);
  let games = gamesState.slice(0, viewGame);

  const getFilteredPlatformGame = (filter) => {
    let filteredData = [];
    if (filter) {
      filteredData = data.filter((game) => {
        return game.platform.indexOf(filter) > -1;
      });
    }

    setFilteredData(filteredData);
  };

  const getMoreGames = () => {
    if (viewGame <= games.length) {
      dispatcher(gamesAction.incViewGame());
    }
  };
  const searchGame = (value) => {
    let searchList = [];
    if (value.length >= 2) {
      setTimeout(() => {
        searchList = data.filter((game) => {
          return game.title.toLowerCase().includes(value);
        });

        setFilteredData(searchList);
      }, 1000);
    } else {
      setFilteredData([]);
    }
  };

  return (
    <div className="bg-light pt-4">
      <Container style={{ minHeight: "100vh" }}>
        <Row>
          <Col xs="12">
            <Card className="mb-4">
              <Card.Body className="d-flex justify-content-between flex-column flex-md-row">
                <Dropdown className="mb-3 mb-md-0">
                  <Dropdown.Toggle variant="none" className="ps-0">
                    {filteredData.length > 0 ? filteredData[0].platform : "Platforms"}
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="px-3 overflow-auto">
                    {platform.map((platform) => (
                      <Dropdown.Item
                        className="rounded"
                        key={platform}
                        onClick={() => {
                          getFilteredPlatformGame(platform);
                        }}
                      >
                        {platform.toUpperCase()}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
                <div className="d-flex justify-content-between">
                  <Form.Control type="search" onChange={(event) => searchGame(event.target.value)} placeholder="Entery game name..." />

                  {filteredData.length > 0 && (
                    <Button size="sm" variant="danger" className="ms-4" onClick={() => getFilteredPlatformGame(null)}>
                      Clear
                    </Button>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>

          {filteredData.length <= 0 ? (
            <>
              {games.map((game) => (
                <Col xs={"12"} md={"6"} lg={"3"} className="mb-4" key={game.id + "/" + game.title}>
                  <GameCard game={game} />
                </Col>
              ))}

              <Col xs={"12"}>
                <div className="d-flex justify-content-center flex-column align-items-center">
                  <Card.Text className="text-muted ">
                    Toplam <strong>{data.length}</strong> kayıttan <strong>{games.length}</strong> kayıt gösteriliyor
                  </Card.Text>
                  <Button className="my-3" onClick={() => getMoreGames()}>
                    More Games
                  </Button>
                </div>
              </Col>
            </>
          ) : (
            filteredData.map((game) => (
              <Col xs={"12"} md={"6"} lg={"3"} className="mb-4" key={game.id + "/" + game.title}>
                <GameCard game={game} />
              </Col>
            ))
          )}
        </Row>
      </Container>
    </div>
  );
};

export const getServerSideProps = async () => {
  const { data } = await axios.get(`https://www.freetogame.com/api/games`);
  return { props: { data: data } };
};

export default Home;
