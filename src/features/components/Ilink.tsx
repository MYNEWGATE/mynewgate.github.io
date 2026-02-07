import { HStack, Link, Text } from "@chakra-ui/react";
import type { FC } from "react";
import { useLocation } from "react-router";

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
    <Link
      href={url}
      cursor={"pointer"}
      _hover={{ color: hover }}
      color={!(path.pathname == url) ? color : "rgb(247, 176, 70)"}
    >
      <HStack gap={3}>
        {icon}
        <Text>{title}</Text>
      </HStack>
    </Link>
  );
};

export default Ilink;
