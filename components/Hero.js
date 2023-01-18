import { Container, Stack, Flex, Heading, Text, Button, Icon, createIcon } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Container maxW={"5xl"}>
      <Stack textAlign={"center"} align={"center"} spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }}>
        <Heading fontWeight={600} fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }} lineHeight={"110%"}>
          Oynaması{" "}
          <Text as={"span"} color={"orange.400"}>
            ücretsiz{" "}
          </Text>
          oyunları keşfedin!
        </Heading>
      </Stack>
    </Container>
  );
};

export default Hero;
