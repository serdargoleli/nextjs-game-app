import GameCard from "@/components/GameCard";

import axios from "axios";

const Games = ({ data }) => {
  const games = data.slice(0, 10);

  return <></>;
};

export const getServerSideProps = async () => {
  const { data } = await axios.get(`https://www.freetogame.com/api/games`);

  return { props: { data: data } };
};

export default Games;
