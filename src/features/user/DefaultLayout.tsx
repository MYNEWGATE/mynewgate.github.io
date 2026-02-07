import { Stack } from "@chakra-ui/react";
import { Outlet } from "react-router";
import Header from "../components/Header";

const DefaultLayout = () => {
  return (
    <Stack h={"stretch"} p={3}>
      <Stack w={"100%"} maxW={"1460px"} alignSelf={"center"}>
        <Header />
        <Outlet />
      </Stack>
    </Stack>
  );
};

export default DefaultLayout;
