import { Box, Flex, Text } from "@chakra-ui/react";

type Props = {
  title: string;
  date: string;
};

export const Document = ({ title, date }: Props) => {
  return (
    <Box p="10px" h="190px" bg="#FFF">
      <Flex h="100%" flexDir="column">
        <Box flex="1">
          <Text mb="10px">{date}</Text>
          <Text
            lineHeight="1.2"
            fontSize={["16px", "16px", "16px", "16px", "16px", "20px"]}
          >
            {title}
          </Text>
        </Box>
        <Flex justifyContent="space-between" align="center">
          <Text fontWeight="600" fontSize="18px" lineHeight="120%">
            DOC
          </Text>
          <Box
            as="button"
            p="7.5px 15px 7.5px 36px"
            color="#FFF"
            bg="url('/images/download.svg') 18px 50% no-repeat, #1468B6"
            fontWeight="500"
            fontSize={["14px"]}
          >
            Скачать
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
