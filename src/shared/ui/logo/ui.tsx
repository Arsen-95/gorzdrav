import { Flex, Img, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

export const Logo = () => {
  return (
    <NextLink passHref href="/">
      <Link textDecor="none">
        <Flex
          gap={["20px", "20px", "10px"]}
          align="center"
          pos={["static", "static", "relative"]}
          zIndex="2"
        >
          <Img
            src="./images/logo.svg"
            alt="logo"
            width={["50px", "50px", "50px", "60px", "60px"]}
            height={["50px", "50px", "50px", "60px", "60px"]}
          />
          <Text
            whiteSpace="pre-wrap"
            fontSize={["12px", "12px", "14px", "16px", "16px", "18px"]}
            w="100%"
            lineHeight="1.2"
          >
            {`Главное управление \nздравоохранения города Ташкента`}
          </Text>
        </Flex>
      </Link>
    </NextLink>
  );
};
