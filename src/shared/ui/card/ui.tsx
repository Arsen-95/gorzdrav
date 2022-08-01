import { Link } from "@chakra-ui/react";
import NextLink from "next/link";

export const Card = ({
  name,
  href,
  ...props
}: {
  name: string;
  href: string;
}) => {
  return (
    <NextLink passHref href={href} {...props}>
      <Link
        target="_blank"
        w="100%"
        display="inline-block"
        h={["100px", "100px", "78px", "100px", "100px"]}
        p={[2.5, 3, 3.5, 4, 5]}
        bg={[
          "url('./images/back-right-black.svg') right 25px top 60px no-repeat",
          "url('./images/back-right-black.svg') right 25px top 60px no-repeat",
          "url('./images/back-right.svg') right 16px top 48px no-repeat",
          "url('./images/back-right.svg') right 25px top 60px no-repeat",
        ]}
        _hover={{
          bg: "url('./images/back-right.svg') right 25px top 60px no-repeat, #1468B6",
          boxShadow: "5px 5px 40px #1468B6",
          border: "1px solid #1468B6",
          color: "#FFF",
        }}
        border={["1px solid #000", "1px solid #000", "1px solid #FFF"]}
        borderRadius="5px"
        whiteSpace="pre-wrap"
        color={["#000", "#000", "#FFF"]}
        fontSize={["14px", "14px", "16px", "16px", "16px", "20px"]}
        lineHeight="1.2"
        fontWeight="500"
      >
        {name}
      </Link>
    </NextLink>
  );
};
