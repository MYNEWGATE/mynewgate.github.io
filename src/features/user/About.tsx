import { Heading, Stack, Text } from "@chakra-ui/react";
import { Box, Circle, HStack, LocaleProvider, Marquee } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const About = () => {
  return (
    <Stack mb={"100px"}>
      <Stack maxW={"900px"} mt={"50px"}>
        <Heading size={"3xl"} pl={3} borderLeft={"3px solid gray"}>
          About Me
        </Heading>
        <Text>
          I am Software Developer based on Baguio City, Benguet Philippines , I
          do both desktop application and web application also mobile app. I
          create solutions align to client's limitless suggestions and revisions
          to their application they wanted. I have more practices on web
          development because with my past experience from 456 hours of OJT in
          government plus 2 years in hotel company. Well I do have idea on
          desktop development because I developed many school project related
          once and some are successfully launched to certain customer but
          eventually the apps are majority not used maybe because of
          credibility. Well who would accept or accredit a DTR system if the
          time entry is allowed to be customized anyway, but that was my past
          college days.
        </Text>
        <Text>
          I do have earn and learn professional ethics on development as
          software developer in a famous hotel. But I don't majority work on a
          group project. Because in the first job I have, one project always
          handle by single staff only, Its a working fullstack because not only
          you construct the documentation but also you construct the UI/UX. You
          do the backend and setup the database for data entry. All task is
          yours, no dev-ops managing it, even quality assurance is yours, then
          many addons and endless revisions. Thats my exposure experience.
        </Text>
        <Text>
          Well I don't have complaints why I choose this career to the things I
          work on because I know my reason why I want programming and that is
          creating solution to ideas and suggestions of the clients, because
          "Programmers makes users life easier" (This is quote from my teacher).
          Well I want actually in touch on technologies like robotics but my
          purpose is more on creating apps to make operation seamless, faster,
          informative and productive.
        </Text>
      </Stack>
      <Stack mt={"50px"}>
        <Heading>People who along with my journey to become programmer</Heading>
        <Text>
          They are the people who help, teach, and also friend to my journey of
          programming.
        </Text>
      </Stack>
      <LocaleProvider locale="ar-AE">
        <Marquee.Root>
          <Marquee.Viewport>
            <Marquee.Content>
              {items.map((item, i) => (
                <Marquee.Item key={i} ps="8">
                  <HStack gap="8" textStyle="xl" fontWeight="medium">
                    <Box>{item}</Box>
                    <Circle size="1.5" bg="fg.muted" />
                  </HStack>
                </Marquee.Item>
              ))}
            </Marquee.Content>
          </Marquee.Viewport>
        </Marquee.Root>
      </LocaleProvider>
      <Stack mt={10}>
        <Heading size={"2xl"} mt={5}>
          More About Me
        </Heading>
        <HStack gap={2}>
          <FaLinkedin />
          <Link
            href="https://www.linkedin.com/in/k-b-daluyen-83443a2a9"
            target="_blank"
          >
            Visit Linkedin
          </Link>
        </HStack>
        <HStack gap={2}>
          <FaGithub />
          <Link href="https://github.com/MYNEWGATE" target="_blank">
            Visit GitHub
          </Link>
        </HStack>
      </Stack>
    </Stack>
  );
};
const items = [
  "Nelson Tacadena (Teacher)",
  "Gerry Dacanay (Teacher)",
  "Ian Krezelvent Agtarap (First job supervisor and teacher)",
  "Benedict Pascua",
  "Melvin Charayap",
  "Chayan Lumage",
  "Vernie Ilasin",
  "Kharl Alog",
  "Gideon Pooten",
  "Gideon Amino",
];

export default About;
