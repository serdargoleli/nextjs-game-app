import axios from "axios";
import { gamesAction } from "@/store/games-slice";
import { useDispatch, useSelector } from "react-redux";

const Home = ({ data }) => {
  const dispatcher = useDispatch();
  dispatcher(gamesAction.setGames(data));
  const state = useSelector((state) => state.games);
  const games = state.games;
  return <></>;
};

export const getServerSideProps = async () => {
  const { data } = await axios.get(`https://www.freetogame.com/api/games`);

  return { props: { data: data } };
};

export default Home;
