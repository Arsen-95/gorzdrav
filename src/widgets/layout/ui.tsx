import { Box, Flex } from "@chakra-ui/react";

import { Navigation } from "@entities/navigation";
import { Footer } from "@shared/ui/footer";
import { Header } from "@shared/ui/header";

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <Flex flexDir="column" h="full">
      <Header />
      {/* <Navigation /> */}
      <Box flex="1">{children}</Box>
      <Footer />
    </Flex>
  );
};
