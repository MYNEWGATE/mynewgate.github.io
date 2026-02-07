import { Avatar, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { IoMenu } from "react-icons/io5";
import { Button, Drawer, Portal } from "@chakra-ui/react";
import { useState } from "react";
import { HiOutlineHome } from "react-icons/hi2";
import { GoPerson } from "react-icons/go";
import { GrContact } from "react-icons/gr";
import { TiFolderOpen } from "react-icons/ti";
import Ilink from "./Ilink";
import { routes } from "../../utils/pageRoutes";
import { Link } from "react-router";

const Header = () => {
  // STATE
  const [open, setOpen] = useState(false);
  const tablet = useMediaQuery("(min-width:742px)");

  // QUERY

  // HANDLE

  // EFFECT
  return (
    <HStack justifyContent={"space-between"} mt={3}>
      <Link to={routes.base}>
        <HStack cursor={"pointer"}>
          <Heading fontWeight={700}>K.D Burgos</Heading>
        </HStack>
      </Link>
      {!tablet ? (
        <Stack>
          <Button variant={"plain"} onClick={() => setOpen(true)}>
            <IoMenu size={"24px"} />
          </Button>
        </Stack>
      ) : (
        <HStack gap={5}>
          <HStack gap={1}>
            <Ilink
              title="Home"
              url={routes.base}
              icon={<HiOutlineHome size={"24px"} />}
            />
          </HStack>
          <HStack gap={1}>
            <Ilink
              title="About Me"
              url={routes.about}
              icon={<GoPerson size={"24px"} />}
            />
          </HStack>
          <HStack gap={1}>
            <Ilink
              title="Contact"
              url={routes.contact}
              icon={<GrContact size={"24px"} />}
            />
          </HStack>
          <HStack gap={1}>
            <Ilink
              title="Projects"
              url={routes.project}
              icon={<TiFolderOpen size={"24px"} />}
            />
          </HStack>
        </HStack>
      )}
      {!tablet && (
        <Drawer.Root
          open={open}
          onOpenChange={(e) => setOpen(e.open)}
          placement={"start"}
        >
          <Portal>
            <Drawer.Backdrop />
            <Drawer.Positioner>
              <Drawer.Content p={3} pt={10}>
                <Drawer.Body>
                  <Stack>
                    <HStack mb="6" gap="3">
                      <Avatar.Root>
                        <Avatar.Fallback name="Karem Daluyen" />
                      </Avatar.Root>
                      <Stack gap="0">
                        <Text fontWeight="semibold" textStyle="sm">
                          Karem Braile Daluyen
                        </Text>
                        <Text color="fg.muted" textStyle="sm">
                          @brailedaluyen@gmail.com
                        </Text>
                      </Stack>
                    </HStack>
                    <Stack gap={3}>
                      <HStack gap={2} onClick={() => setOpen(false)}>
                        <Ilink
                          title="Home"
                          url={routes.base}
                          icon={<HiOutlineHome size={"24px"} />}
                        />
                      </HStack>
                      <HStack gap={2} onClick={() => setOpen(false)}>
                        <Ilink
                          title="About Me"
                          url={routes.about}
                          icon={<GoPerson size={"24px"} />}
                        />
                      </HStack>
                      <HStack gap={2} onClick={() => setOpen(false)}>
                        <Ilink
                          title="Contact"
                          url={routes.contact}
                          icon={<GrContact size={"24px"} />}
                        />
                      </HStack>
                      <HStack gap={2} onClick={() => setOpen(false)}>
                        <Ilink
                          title="Projects"
                          url={routes.project}
                          icon={<TiFolderOpen size={"24px"} />}
                        />
                      </HStack>
                    </Stack>
                  </Stack>
                </Drawer.Body>
                <Drawer.Footer></Drawer.Footer>
              </Drawer.Content>
            </Drawer.Positioner>
          </Portal>
        </Drawer.Root>
      )}
    </HStack>
  );
};

export default Header;
