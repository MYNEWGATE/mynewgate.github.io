import { Heading, VStack } from "@chakra-ui/react";

const NotFound = () => {
  return (
    <VStack w={"100vw"} h={"100vh"} m={"auto"} justifyContent={"center"}>
      <Heading size={"7xl"}>404</Heading>
      <Heading size={"lg"}>Sorry, page not found.</Heading>
    </VStack>
  );
};

export default NotFound;
