import axios from "axios";
import { gamesAction } from "@/store/games-slice";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Col, Container, Row, Dropdown } from "react-bootstrap";
import GameCard from "@/components/GameCard";
import { useState } from "react";

const Home = ({ data }) => {
  const dispatcher = useDispatch();
  dispatcher(gamesAction.setGames(data));
  const gamesState = useSelector((state) => state.games.games); //storedan oyunları çek
  const viewGame = useSelector((state) => state.games.viewGame); // stordan limit sayısını çek
  const platform = useSelector((state) => state.games.platform); // stordan platform çek

  let games = gamesState.slice(0, viewGame);

  const [filteredData, setFilteredData] = useState([]);

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

  return (
    <div className="bg-light pt-4">
      <Container>
        <Row>
          <Col xs="12">
            <Card className="mb-4">
              <Card.Body className="d-flex justify-content-between">
                <div className="d-flex justify-content-between">
                  <Dropdown>
                    <Dropdown.Toggle variant="none" id="dropdown-basic">
                      {filteredData.length > 0 ? filteredData[0].platform : "Platforms"}
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="px-3 overflow-auto">
                      <Row>
                        {platform.map((platform) => (
                          <Col xs="12">
                            <Dropdown.Item
                              className="rounded"
                              onClick={() => {
                                getFilteredPlatformGame(platform);
                              }}
                            >
                              {platform.toUpperCase()}
                            </Dropdown.Item>
                          </Col>
                        ))}
                      </Row>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                {filteredData.length > 0 && (
                  <Button size="sm" variant="danger" onClick={() => getFilteredPlatformGame(null)}>
                    Clear
                  </Button>
                )}
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
