import axios from "axios";
import GameCard from "@/components/GameCard";
import { Box, Button, Center, Flex, GridItem, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import Hero from "@/components/Hero";

const Games = ({ data }) => {
  let [sliceCounter, setSliceCounter] = useState(12);
  const games = data.slice(0, sliceCounter);

  const getMoreGame = () => {
    if (sliceCounter <= data.length) {
      setSliceCounter(sliceCounter + sliceCounter);
    }
  };

  return (
    <Box>
      <Hero />

      <SimpleGrid spacing="1rem" columns={[1, null, 2, 3]}>
        {games.map((game) => (
          <GameCard game={game} />
        ))}
      </SimpleGrid>

      <Center my={"2rem"}>
        <Button colorScheme="yellow" w={["full", null, "md", "sm"]} onClick={() => getMoreGame()}>
          DAHA FAZLA
        </Button>
      </Center>
    </Box>
  );
};

export const getServerSideProps = async () => {
  const { data } = await axios.get(`https://www.freetogame.com/api/games`);

  return { props: { data: data } };
};

export default Games;
