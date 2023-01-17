import { Button, Text, Flex, Center } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { counterAction } from "../store/counterState";

export default function Home() {
  const dispatcher = useDispatch();

  let counterState = useSelector((state) => state.counter);

  return (
    <Flex>
      <Center>
        <Button colorScheme="teal" size="md" onClick={() => dispatcher(counterAction.inc(-5))}>
          -5
        </Button>
        <Text mx={"4"}>Counter: {counterState.counter} </Text>

        <Button colorScheme="teal" size="md" onClick={() => dispatcher(counterAction.inc(5))}>
          +5
        </Button>
      </Center>
    </Flex>
  );
}
