import { HStack, Text } from "@chakra-ui/react";
import type { FC } from "react";
import { Link, useLocation } from "react-router";

interface prop {
  url?: string;
  icon?: React.ReactElement;
  title: string;
  hover?: any;
  color?: any;
}
const Ilink: FC<prop> = ({ url, icon, title, hover, color }) => {
  // STATE
  const path = useLocation();

  // HANDLE
  return (
    <Link to={url || '/'}>
      <HStack gap={3} cursor={"pointer"}
      _hover={{ color: hover }}
      color={!(path.pathname == url) ? color : "rgb(247, 176, 70)"}>
        {icon}
        <Text>{title}</Text>
      </HStack>
    </Link>
  );
};

export default Ilink;
