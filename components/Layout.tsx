import ColorCard from "./Card";
import { Container, Flex } from "@chakra-ui/react";

export const Layout = ({ children }: { children: any }) => {
  return (
    <Container maxW="md" py={20}>
      {children}
    </Container>
  );
};

export default Layout;
