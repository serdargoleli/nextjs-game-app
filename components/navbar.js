import Link from "next/link";
import { Box, Flex, Avatar, Button, useColorModeValue, Stack, useColorMode, Container } from "@chakra-ui/react";
export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box bg={useColorModeValue("gray.100", "blue.900")}>
      <Container maxW={"1300px"}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Link href={"/games"}> S'GAME APP</Link>
          </Box>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>{colorMode === "light" ? "Light" : "Dark"}</Button>
            </Stack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
