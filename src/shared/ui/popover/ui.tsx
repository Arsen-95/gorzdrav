import { Box, BoxProps, Container, Text } from "@chakra-ui/react";

type Props = {
  nav: string;
  children: React.ReactNode;
} & BoxProps;

export const Popover: React.FC<Props> = ({
  children,
  nav,
  ...props
}: Props) => {
  return (
    <Box
      role="group"
      display="inline-block"
      boxSizing="border-box"
      _hover={{ borderBottom: "3px solid #1468B6" }}
      h={["60px"]}
      {...props}
    >
      <Text
        cursor="pointer"
        py={["14px", "14px", "15px", "20px", "23px", "21.5px"]}
      >
        {nav}
      </Text>
      <Box
        zIndex="1"
        bg="#FFF"
        w="100%"
        top="100%"
        left="0"
        position="absolute"
        visibility="hidden"
        opacity="0"
        transition="all 0.2s"
        _groupHover={{ visibility: "visible", opacity: 1 }}
      >
        <Container>{children}</Container>
      </Box>
    </Box>
  );
};
