import { Box, Container, Flex, Img, Link, Text } from "@chakra-ui/react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box as="footer" bg="blue">
      <Container>
        <Box py={["20px", "20px", "40px", "40px", "60px", "70px"]}>
          <Flex
            justifyContent={["center", "center", "space-between"]}
            mb={["30px"]}
          >
            <Flex
              flexDir={["column", "column", "row"]}
              justifyContent={["center", "center", "left"]}
              alignItems="center"
            >
              <Img
                src="/images/logo.svg"
                alt="logp"
                width={["50px", "50px", "50px", "50px", "60px", "80px"]}
                height={["50px", "50px", "50px", "50px", "60px", "80px"]}
                mb={["10px", "10px", "0"]}
                mr={["", "", "10px", "15px", "20px"]}
              />
              <Text
                maxW="200px"
                textAlign={["center", "center", "left"]}
                fontSize={["12px", "12px", "14px", "14px", "16px", "20px"]}
                lineHeight="120%"
                color="#FFF"
              >
                Главное управление здравоохранения города Ташкента
              </Text>
            </Flex>
            <Text
              display={["none", "none", "block"]}
              maxW="250px"
              color="#FFF"
              fontSize="14px"
            >
              Если Вы нашли ошибку в тексте, выделите её и нажмите Ctrl+Enter
              для уведомления администрации
            </Text>
          </Flex>
          <Flex
            flexDir={["column", "column", "row"]}
            justifyContent="space-between"
            alignItems={["", "", "flex-end"]}
          >
            <Box
              textAlign="center"
              mb={["30px", "30px", "0"]}
              order={["1", "1", "2"]}
            >
              <Link
                display="inline-block"
                color="blue"
                borderRadius="5px"
                p="15px 25px 15px 80px"
                fontSize="12px"
                lineHeight="1.2"
                textAlign="left"
                bg="url('images/telegram-blue.svg') 24px 50% no-repeat, #F5F5F5"
                href="https://t.me/TShSSBB"
                target="_blank"
              >
                Следите за <br />
                нашими новостями <br />
                через{" "}
                <Box as="span" fontWeight="600">
                  Telegram
                </Box>
              </Link>
            </Box>
            <Text
              textAlign="center"
              color="#FFF"
              fontSize={["14px", "14px", "14px", "14px", "16px"]}
              order={["2", "2", "1"]}
            >
              {currentYear}. Все права защищены.
            </Text>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};
