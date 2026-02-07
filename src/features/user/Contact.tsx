import { Heading, HStack, Stack, Text } from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
const Contact = () => {
  return (
    <Stack p={"50px"} gap={1}>
      <Heading size={"2xl"}>Contact Me</Heading>
      <Text>Any queations related to my project or experience:</Text>
      <HStack gap={2}>
        <MdEmail />
        <Heading size={"sm"}>Email: </Heading>
        <Text>brailedaluyen@gmail.com</Text>
      </HStack>
    </Stack>
  );
};

export default Contact;
