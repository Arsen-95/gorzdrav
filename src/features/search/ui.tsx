import { Box, Button, Input } from "@chakra-ui/react";

export const Search = () => {
  return (
    <Box as="form" display="flex">
      <Input
        placeholder="Поиск по сайту"
        borderRadius="5px 0 0 5px"
        h={["50px", "50px", "50px", "60px", "70px"]}
        w={["180px", "220px", "300px", "285px", "285px", "360px"]}
        borderRight="0"
        bg="#FFF"
      />

      <Box
        as="button"
        p={[
          "16.5px 20.5px 16.5px 41.5px",
          "16.5px 20.5px 16.5px 41.5px",
          "15.5px 40px 15.5px 63px",
          "20.5px 45px 20.5px 68px",
          "20.5px 45px 20.5px 68px",
          "24px 65px 24px 90px",
        ]}
        lineHeight="1.2"
        bg="url('./images/search.svg') no-repeat , #1468B6"
        bgPos={["20px 50%", "22px 50%", "35px 50%", "40px 50%"]}
        fontSize={["14px", "16px", "16px", "16px", "16px", "18px"]}
        fontWeight="500"
        color="#FFF"
        borderRadius="0 5px 5px 0"
      >
        Искать
      </Box>
    </Box>
  );
};
