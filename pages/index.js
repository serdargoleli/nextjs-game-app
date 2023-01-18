import axios from "axios";
import { gamesAction } from "@/store/games-slice";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Col, Container, Offcanvas, Row, Form } from "react-bootstrap";
import GameCard from "@/components/GameCard";
import { useState } from "react";
import Link from "next/link";

const Home = ({ data }) => {
  const dispatcher = useDispatch();
  let [moreGameLimit, setMoreGameLimit] = useState(12);
  dispatcher(gamesAction.setGames(data));
  const gamesState = useSelector((state) => state.games.games);
  let games = gamesState.slice(0, moreGameLimit);
  const categories = useSelector((state) => state.games.categories);

  let [handleFilterToggle, setHandleFilterToggle] = useState(false);

  const getMoreGames = () => {
    if (moreGameLimit <= games.length) {
      setMoreGameLimit((moreGameLimit += 12));
    }
  };

  return (
    <div className="bg-light pt-4">
      <Container>
        <Row>
          {games.map((game) => (
            <Col xs={"12"} md={"6"} lg={"3"} className="mb-4" key={game.id}>
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
              <Card.Text>
                Power By{" "}
                <Link href={"https://www.freetogame.com/"} target={"_blank"}>
                  freetogame.com
                </Link>{" "}
              </Card.Text>
            </div>
          </Col>
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
