import { Box, Center, Heading, Text, Stack, Avatar, useColorModeValue, Badge } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const GameCard = ({ game }) => {
  return (
    <Link href={`/games/${game.id}`}>
      <Box w={"full"} h={"full"} bg={useColorModeValue("white", "gray.900")} boxShadow={"2xl"} rounded={"md"} p={6} overflow={"hidden"}>
        <Box h={"206px"} bg={"gray.100"} mt={-6} mx={-6} mb={6} pos={"relative"}>
          <Image src={game.thumbnail} fill alt={game.title} />
        </Box>
        <Stack>
          <Text color={"green.500"} textTransform={"uppercase"} fontWeight={800} fontSize={"sm"} letterSpacing={1.1}>
            <Badge>{game.genre}</Badge>
          </Text>
          <Heading color={useColorModeValue("gray.700", "white")} fontSize={"2xl"} fontFamily={"body"}>
            {game.title}
          </Heading>
          <Text color={"gray.500"} noOfLines={1}>
            {game.short_description}
          </Text>
        </Stack>
        <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <Avatar src={"https://avatars0.githubusercontent.com/u/1164541?v=4"} alt={"Author"} />
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text fontWeight={600}>Achim Rolle</Text>
            <Text color={"gray.500"}>Feb 08, 2021 · 6min read</Text>
          </Stack>
        </Stack>
      </Box>
    </Link>
  );
};

export default GameCard;
