import { Box, Img, Link, Text } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";

export const ServiceCard = ({
  name,
  img,
  href,
}: {
  name: string;
  img: string;
  href: string;
}) => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <Link
      display="block"
      h={["200px", "200px", "220px", "220px", "250px", "320px"]}
      p={["10px", "10px", "15", "20px", "30px"]}
      bg="#F5F5F5"
      borderRadius="5px"
      borderTop="5px solid #1468B6"
      minW={["200px", "200px", "auto"]}
      overflow="hidden"
      _hover={
        isLargerThan768
          ? {
              bg: "blue",
              color: "#FFF",
            }
          : {}
      }
      transition="background 0.3s"
      role="group"
      position="relative"
      href={href}
      target="_blank"
    >
      <Box
        display={["none", "none", "none", "block"]}
        w="60px"
        h="60px"
        bg="url('/images/service-arrow.svg') no-repeat"
        pos="absolute"
        bottom="30px"
        right="40px"
        visibility="hidden"
        _groupHover={{
          visibility: "visible",
        }}
      />
      <Img
        src={img}
        alt="service"
        width={["45px", "45px", "45px", "55px", "70px"]}
        height={["45px", "45px", "45px", "55px", "70px"]}
        mb={5}
        _groupHover={
          isLargerThan768
            ? {
                position: "absolute",
                visibility: "hidden",
                opacity: 0,
              }
            : {}
        }
        transition="all 0.1s"
      />
      <Text
        fontSize={["16px", "16px", "16px", "16px", "16px", "24px"]}
        lineHeight="120%"
      >
        {name}
      </Text>
    </Link>
  );
};
