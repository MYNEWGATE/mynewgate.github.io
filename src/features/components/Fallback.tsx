import { Heading, Spinner, VStack } from "@chakra-ui/react";

const Fallback = () => {
  return (
    <VStack w={"100vw"} h={"100vh"} justifyContent={"center"}>
      <VStack>
        <Spinner size={"lg"} />
        <Heading>LOADING...</Heading>
      </VStack>
    </VStack>
  );
};

export default Fallback;
