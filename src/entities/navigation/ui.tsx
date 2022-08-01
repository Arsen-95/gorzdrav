import {
  Box,
  Container,
  Flex,
  Img,
  Link,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useEffect, useState } from "react";

import { ChangeLocale } from "@features/change-locale";
import { Accordion } from "@shared/ui/accordion";
import { Popover } from "@shared/ui/popover";

import { navList } from "./lib";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  }, [isOpen]);

  return (
    <Box pos="relative">
      <Container>
        <Flex display={["none", "none", "none", "flex"]}>
          {navList.map((nav) => (
            <Popover
              fontSize={["", "", "", "", "", "18px"]}
              lineHeight="1.2"
              nav={nav.title}
              px="10px"
              key={nav.title}
            >
              <Flex flexDir="column" gap="10px" py="25px">
                {nav.text.map((text) => (
                  <NextLink href="#" passHref key={text}>
                    <Link
                      lineHeight="1.2"
                      fontSize="20px"
                      fontWeight="500"
                      _hover={{ color: "blue" }}
                    >
                      {text}
                    </Link>
                  </NextLink>
                ))}
              </Flex>
            </Popover>
          ))}
        </Flex>

        {/* Мобилка */}

        <Flex
          display={["flex", "flex", "flex", "none"]}
          alignItems="center"
          justifyContent={["space-between", "space-between", "center"]}
        >
          <ChangeLocale display={["block", "block", "none"]} />
          <Box
            onClick={() => setIsOpen((value) => !value)}
            py={["14px", "14px", "15px", "20px", "23px", "21.5px"]}
            pl="40px"
            w="96px"
            pos="relative"
            _after={{
              content: "''",
              position: "absolute",
              top: "40%",
              left: "0",
              width: "30px",
              height: "2px",
              bg: "black",
            }}
            _before={{
              content: "''",
              position: "absolute",
              top: "60%",
              left: 0,
              width: "30px",
              height: "2px",
              bg: "black",
            }}
          >
            Меню
          </Box>
          <Flex display={["flex", "flex", "none"]}>
            <Img mr="20px" src="/images/eye.svg" alt="eye" />
            <Img src="/images/user.svg" alt="user" />
          </Flex>
        </Flex>
      </Container>
      <Box
        bg={["#F5F5F5", "#F5F5F5", "#FFF"]}
        pos="fixed"
        zIndex={1}
        opacity={isOpen ? 1 : 0}
        visibility={isOpen ? "visible" : "hidden"}
        transform={isOpen ? "translateX(0%)" : "translateX(100%)"}
        right="0"
        left="0"
        top="0"
        h="100vh"
        transition="all 0.3s"
      >
        <Container>
          <Box
            py={["20px", "20px", "28px"]}
            display="flex"
            justifyContent="flex-end"
            borderBottom="0.3px solid #000000"
          >
            <Box
              onClick={() => setIsOpen((value) => !value)}
              as="button"
              pos="relative"
              display="block"
              w="20px"
              h="14px"
              _after={{
                content: "''",
                h: "3px",
                w: "40px",
                bgColor: "#000",
                pos: "absolute",
                right: "0px",
                transform: "rotate(-45deg)",
              }}
              _before={{
                content: "''",
                h: "3px",
                w: "40px",
                bgColor: "#000",
                pos: "absolute",
                right: "0px",
                transform: "rotate(45deg)",
              }}
            />
          </Box>
          <Box display={["block", "block", "none"]}>
            <Accordion navList={navList}></Accordion>
          </Box>
        </Container>

        <Tabs w="100%" display={["none", "none", "flex"]}>
          <Box flexBasis="254px" bg="#F5F5F5" pt="40px">
            <TabList h="100vh" display="flex" flexDir="column">
              {navList.map((nav) => (
                <Tab
                  _selected={{ color: "blue" }}
                  fontWeight="500"
                  fontSize="24px"
                  lineHeight="1.2"
                  justifyContent="left"
                >
                  {nav.title}
                </Tab>
              ))}
            </TabList>
          </Box>
          <TabPanels pt="40px" flex="1">
            {navList.map((nav) => (
              <TabPanel display="flex" flexDir="column" gap="15px">
                {nav.text.map((text) => (
                  <NextLink href="#">
                    <Link
                      pb="15px"
                      borderBottom="0.3px solid #000000"
                      fontWeight="500"
                      lineHeight="1.2"
                      color="#888888"
                    >
                      {text}
                    </Link>
                  </NextLink>
                ))}
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};
