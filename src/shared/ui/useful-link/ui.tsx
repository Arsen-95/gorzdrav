import { Box, Img, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

export const UsefulLink = ({
  name,
  href,
  image,
}: {
  name: string;
  href: string;
  image: string;
}) => {
  return (
    <NextLink href={href} passHref>
      <Link
        display="flex"
        h={["170px", "170px", "170px", "170px", "170px", "222px"]}
        flexDir="column"
        p="20px"
        bgColor="#FFF"
        borderRadius="5px"
        target="_blank"
      >
        <Box flex="1">
          <Img src={image} alt="useful link" />
        </Box>
        <Text
          lineHeight="150%"
          fontSize={["12px", "12px", "12px", "12px", "14px", "16px"]}
        >
          {name}
        </Text>
      </Link>
    </NextLink>
  );
};
