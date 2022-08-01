import { Box, BoxProps, Flex, Text } from "@chakra-ui/react";

type Props = {
  name: string;
  location: string;
  phone: string;
  image: string;
} & BoxProps;

export const Building = ({ name, location, phone, image, ...props }: Props) => {
  return (
    <Flex flexDir={["column", "column", "row"]} gap="20px" {...props}>
      <Box
        flexBasis={["160px", "160px", "81%", "81%"]}
        h={["160px", "160px", "160px", "165px", "165px", "210px"]}
        bg={image}
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPos="center"
      />
      <Box>
        <Text
          as="h2"
          fontWeight="500"
          mb={["8px", "8px", "8px", "8px", "8px", "8px"]}
          fontSize={["16px", "14px", "16px", "16px", "16px", "20px"]}
          borderBottom="0.394366px solid #090909"
          pb={["8px", "8px", "10px", "10px", "10px", "12.5px"]}
        >
          {name}
        </Text>
        <Text
          pl="25px"
          mb="8px"
          fontSize={["14px", "12px"]}
          color="#888888"
          lineHeight="1.2"
          bg="url('/images/location.svg') 0 / 16px no-repeat"
        >
          {location}
        </Text>
        <Text
          pl="25px"
          fontSize={["14px", "12px"]}
          color="#888888"
          lineHeight="1.2"
          bg="url('/images/phone.svg') 0  / 14px no-repeat"
        >
          {phone}
        </Text>
      </Box>
    </Flex>
  );
};
