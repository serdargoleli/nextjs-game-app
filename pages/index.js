import axios from "axios";
import { gamesAction } from "@/store/games-slice";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import GameCard from "@/components/GameCard";

const Home = ({ data }) => {
  const dispatcher = useDispatch();
  dispatcher(gamesAction.setGames(data));
  const gamesState = useSelector((state) => state.games.games);
  const viewGame = useSelector((state) => state.games.viewGame);
  let games = gamesState.slice(0, viewGame);
  const categories = useSelector((state) => state.games.categories);

  const getMoreGames = () => {
    if (viewGame <= games.length) {
      dispatcher(gamesAction.incViewGame());
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
