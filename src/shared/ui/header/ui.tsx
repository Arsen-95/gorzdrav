import { Box, Container, Flex, Link } from "@chakra-ui/react";

import { ChangeLocale } from "@features/change-locale";
import { Logo } from "@shared/ui/logo";

export const Header = () => {
  return (
    <Box as="header" borderBottom="0.3px solid #000" bg="#F5F5F5">
      <Container>
        <Flex align="center" justifyContent="space-between" py="10px">
          <Logo />
          <Link
            display={["none", "none", "none", "block"]}
            bg="url('./images/phone.svg') 0 50% / 15px no-repeat"
            pl="20px"
            fontWeight={500}
            fontSize={["0px", "0px", "0px", "14px", "16px"]}
            href="tel:+998  712394795"
          >
            +998 (71) 233 65 71
          </Link>
          <Link
            display={["none", "none", "none", "none", "block", "none"]}
            bg="url('./images/phone.svg') 0 50% / 15px no-repeat"
            pl="20px"
            fontWeight={500}
            fontSize={["0px", "0px", "0px", "14px", "16px"]}
            href="tel:1003"
          >
            1003
          </Link>

          <Flex
            alignItems="center"
            justify="space-between"
            display={["none", "none", "flex"]}
            gap={["", "", "27px"]}
          >
            <Box as="form" action="https://t.me/TShSSBB" target="_blank">
              <Box
                as="button"
                display={["none", "none", "block"]}
                p={[
                  0,
                  0,
                  "13px 40px 13px 16px",
                  "13px 40px 13px 16px",
                  "16.5px 54px 16.5px 16px",
                  "16.5px 63px 16.5px 25px",
                ]}
                whiteSpace="nowrap"
                borderRadius="5px"
                color="#FFF"
                bg="url('./images/telegram.svg') right 20px top 50% / 14.85px 12.45px no-repeat, #1468B6"
                fontSize={[0, 0, "12px", "12px", "14px"]}
                lineHeight="1.2"
              >
                Перейти в телеграм канал
              </Box>
            </Box>
            <ChangeLocale />
            <Box
              as="button"
              bg="url('./images/eye.svg') 0px / cover no-repeat"
              w={["", "", "16px", "16px", "21px"]}
              h={["", "", "10px", "10px", "12.5px"]}
            />
            <Box
              as="button"
              bg="url('./images/user.svg') 0px 0px / cover no-repeat"
              w={["", "", "13px", "13px", "16.5px"]}
              h={["", "", "13px", "13px", "16.5px"]}
            />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
