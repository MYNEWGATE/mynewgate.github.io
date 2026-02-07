import { Heading, Image, Link, Stack } from "@chakra-ui/react";
import { Button, Card } from "@chakra-ui/react";

const Project = () => {
  return (
    <Stack mt={10}>
      <Heading size={"2xl"} fontWeight={800}>
        Proudly present (Working Projects)
      </Heading>
      <Stack gap="4" direction="row" wrap="wrap">
        <Card.Root width={{ base: "100%", md: "320px" }} variant={"elevated"}>
          <Card.Body gap="2">
            <Image
              objectFit={"cover"}
              alt="CLGRRC"
              src="/src/assets/Screenshot 2026-02-07 204334.png"
            />
            <Card.Title mb="2">CLGRRC Website</Card.Title>
            <Card.Description>
              This is an OJT group project lead by me, succesfully deploy using
              Laravel framework from 2024. Hoping the gov. IT team will still
              continue maintaining the page for information and transparent.
            </Card.Description>
          </Card.Body>
          <Card.Footer justifyContent="flex-end">
            <Link href="https://clgrrc.car.dilg.gov.ph" target="_blank">
              <Button variant="outline" size={"sm"}>
                View Page
              </Button>
            </Link>
          </Card.Footer>
        </Card.Root>
        <Card.Root width={{ base: "100%", md: "320px" }} variant={"elevated"}>
          <Card.Body gap="2">
            <Image
              objectFit={"cover"}
              alt="Capdevpro"
              src="/src/assets/capdev.png"
            />
            <Card.Title mb="2">E-Learning Capdevpro</Card.Title>
            <Card.Description>
              Project assign to me during 456 hours of OJT along side 2 project
              and purposely to develop e-learning, from user activity submition
              and shared CLGRRC modules.
            </Card.Description>
          </Card.Body>
          <Card.Footer justifyContent="flex-end">
            <Link href="https://capdevpro.car.dilg.gov.ph" target="_blank">
              <Button variant="outline" size={"sm"}>
                View Page
              </Button>
            </Link>
          </Card.Footer>
        </Card.Root>
      </Stack>
    </Stack>
  );
};

export default Project;
