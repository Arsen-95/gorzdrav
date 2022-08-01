import { ComponentStyleConfig } from "@chakra-ui/react";

export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: "5px",
  },
  variants: {
    primary: {
      bg: "blue",
      color: "#FFF",
    },
    secondary: {
      bg: "#F5F5F5",
    },
  },
};
