import {
  Carousel,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Avatar, Card, Strong } from "@chakra-ui/react";
import { Box, IconButton, Span } from "@chakra-ui/react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

const Home = () => {
  return (
    <Stack mt={"100px"} mb={"100px"}>
      <HStack
        justifyContent={"space-between"}
        flexWrap={{ base: "wrap", md: "nowrap" }}
      >
        <Stack w={"100%"}>
          <Stack borderLeft={"1px solid black"} gap={1} pl={3}>
            <Heading size={"sm"}>Need a fullstack programmer?</Heading>
            <Heading size={"3xl"} fontWeight={700} maxW={"380px"}>
              Hi!, I am Karem Daluyen, a Software Developer
            </Heading>
          </Stack>
          <Text>
            I am a software developer with experience on building desktop and
            web applications. I specialize in transforming complex work
            operations into seamless, efficient software solutions. I have
            nearly one and a half years of hands-on experience developing web
            applications, focusing on functionality, usability, and reliability.
            I earned my Bachelor’s degree in Information Technology from Baguio
            College of Technology, where I developed a strong foundation in
            software development and problem-solving.
          </Text>
        </Stack>
        <Stack w={"100%"} alignItems={"center"} mt={{ base: "50px", md: 0 }}>
          <Image
            border={"1px solid gray"}
            alt=""
            w={"300px"}
            h={"400px"}
            objectFit={"contain"}
          />
        </Stack>
      </HStack>
      <Stack p={{ base: 0, md: "50px" }} mt={{ base: "25px", md: 0 }}>
        <HStack justifyContent={"space-between"} w={"100%"}>
          <Stack w={"100%"}>
            <Heading size={"2xl"} color={"gray.500"}>
              My Expertise
            </Heading>
            <HStack gap={5} flexWrap={"wrap"}>
              <Card.Root width={{ base: "100%", lg: "320px" }} h={"stretch"}>
                <Card.Body>
                  <HStack mb="6" gap="3">
                    <Avatar.Root>
                      <Avatar.Fallback name="Front End" />
                    </Avatar.Root>
                    <Stack gap="0">
                      <Text fontWeight="semibold" textStyle="sm">
                        Front End Development
                      </Text>
                    </Stack>
                  </HStack>
                  <Card.Description>
                    <Strong color="fg">Front End</Strong>I have idea on how to
                    develop a front end page by making all non-readable data
                    into readable page, Involving usage of html, css, and
                    javascript. I also use UI components for faster design.
                  </Card.Description>
                </Card.Body>
              </Card.Root>
              <Card.Root width={{ base: "100%", lg: "320px" }} h={"stretch"}>
                <Card.Body>
                  <HStack mb="6" gap="3">
                    <Avatar.Root>
                      <Avatar.Fallback name="Back End" />
                    </Avatar.Root>
                    <Stack gap="0">
                      <Text fontWeight="semibold" textStyle="sm">
                        Back End Development
                      </Text>
                    </Stack>
                  </HStack>
                  <Card.Description>
                    <Strong color="fg">Back End</Strong>I have been exposed on
                    making REST api for data req and ret. I also work on
                    securing and the backend by practicing some measure like
                    CORS, passport, query limit, cache, socket, etc.
                  </Card.Description>
                </Card.Body>
              </Card.Root>
              <Card.Root width={{ base: "100%", lg: "320px" }} h={"stretch"}>
                <Card.Body>
                  <HStack mb="6" gap="3">
                    <Avatar.Root>
                      <Avatar.Fallback name="Operation" />
                    </Avatar.Root>
                    <Stack gap="0">
                      <Text fontWeight="semibold" textStyle="sm">
                        Debug, Deploy, Server Setup
                      </Text>
                    </Stack>
                  </HStack>
                  <Card.Description>
                    <Strong color="fg">Operation</Strong>Yes, I do understand
                    bugs in the code, I can fix program if something went wrong,
                    I do also implement deployment from dev to production, I
                    know how to setup server for usage so application can run.
                  </Card.Description>
                </Card.Body>
              </Card.Root>
              <Card.Root width={{ base: "100%", lg: "320px" }} h={"stretch"}>
                <Card.Body>
                  <HStack mb="6" gap="3">
                    <Avatar.Root>
                      <Avatar.Fallback name="Robotics" />
                    </Avatar.Root>
                    <Stack gap="0">
                      <Text fontWeight="semibold" textStyle="sm">
                        Arduino C++
                      </Text>
                    </Stack>
                  </HStack>
                  <Card.Description>
                    <Strong color="fg">Robotics</Strong>I do also have knowledge
                    using arduinos, making succesfull working devices for
                    production use, for research and development etc.
                  </Card.Description>
                </Card.Body>
              </Card.Root>
            </HStack>
          </Stack>
        </HStack>
      </Stack>
      <Stack>
        <Carousel.Root
          slideCount={properties.length}
          slidesPerPage={3}
          gap="3"
          autoplay={{ delay: 2000 }}
          mt={{ base: "100px", md: 0 }}
        >
          <HStack justify="space-between">
            <Heading size={"lg"} fontWeight={700} maxW={"420px"}>
              Thanks to Frameworks, language, components I use for every development I do.
            </Heading>
            <HStack>
              <Carousel.PrevTrigger asChild>
                <IconButton size="xs" variant="subtle">
                  <LuChevronLeft />
                </IconButton>
              </Carousel.PrevTrigger>
              <Carousel.NextTrigger asChild>
                <IconButton size="xs" variant="subtle">
                  <LuChevronRight />
                </IconButton>
              </Carousel.NextTrigger>
            </HStack>
          </HStack>
          <Carousel.ItemGroup>
            {properties.map((property, index) => (
              <Carousel.Item key={property.id} index={index}>
                <PropertyCard data={property} />
              </Carousel.Item>
            ))}
          </Carousel.ItemGroup>
        </Carousel.Root>
      </Stack>
    </Stack>
  );
};

interface PropertyCardProps {
  data: Property;
}

const PropertyCard = ({ data }: PropertyCardProps) => (
  <Stack gap="3">
    <Box position="relative">
      <Image
        src={data.image}
        alt={data.title}
        rounded="l2"
        w="full"
        h="200px"
        objectFit={{ base: "contain", lg: "cover" }}
        draggable={false}
      />
    </Box>
    <Stack gap="1">
      <Span fontWeight="semibold" textStyle="sm">
        {data.title}
      </Span>
      <HStack color="fg.muted" textStyle="xs">
        <HStack gap="1"></HStack>
      </HStack>
    </Stack>
  </Stack>
);

interface Property {
  id: number;
  title: string;
  image: string;
}

const properties: Property[] = [
  {
    id: 1,
    title: "React Typescript",
    image: "/src/assets/react.png",
  },
  {
    id: 2,
    title: "Chakra UI components",
    image: "/src/assets/chakra-ui2348.logowik.webp",
  },
  {
    id: 3,
    title: "Laravel Framework",
    image: "/src/assets/laravel8530.jpg",
  },
  {
    id: 4,
    title: "I use Node Modules",
    image: "/src/assets/Node.js_logo.svg.png",
  },
  {
    id: 5,
    title: "Python Language",
    image: "/src/assets/Python-logo-notext.svg.png",
  },
  {
    id: 6,
    title: "C ++ Language",
    image: "/src/assets/ISO_C++_Logo.svg.png",
  },
  {
    id: 7,
    title: "C sharp",
    image: "/src/assets/Csharp_Logo.png",
  },
  {
    id: 8,
    title: "Flutter for mobile development",
    image: "/src/assets/flutter-logo-png_seeklogo-349577.png",
  },
];

export default Home;
