import {
  AccordionItem,
  Box,
  Accordion as ChakraAccordion,
  AccordionPanel,
  AccordionButton,
  AccordionProps,
  Link,
  Flex,
} from "@chakra-ui/react";
import NextLink from "next/link";

type Props = {
  navList: { title: string; text: string[] }[];
} & AccordionProps;

export const Accordion: React.FC<Props> = ({ navList }) => {
  return (
    <ChakraAccordion allowToggle>
      {navList.map((nav) => (
        <AccordionItem key={nav.title}>
          <h2>
            <AccordionButton>
              <Box
                flex="1"
                textAlign="left"
                fontWeight="500"
                fontSize="24px"
                lineHeight="120%"
              >
                {nav.title}
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Flex flexDirection="column" gap="10px">
              {nav.text.map((text, index) => (
                <NextLink href="#" passHref key={index}>
                  <Link>{text}</Link>
                </NextLink>
              ))}
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </ChakraAccordion>
  );
};
