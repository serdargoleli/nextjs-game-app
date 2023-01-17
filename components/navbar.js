import { Box, Flex, Button, useDisclosure, useColorModeValue, Stack, useColorMode, Container } from "@chakra-ui/react";

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box w={"100%"} bg={useColorModeValue("gray.100", "blue.900")} px={4}>
        <Container w={"100%"} maxW="container.xl">
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <Box>S'GAME APP</Box>
            <Flex alignItems={"center"}>
              <Stack direction={"row"} spacing={7}>
                <Button onClick={toggleColorMode}>{colorMode === "light" ? "Light" : "Dark"}</Button>
              </Stack>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
