import { fonts } from "./fonts";
import { components } from "./components";
import { extendTheme } from "@chakra-ui/react";
import { global } from "./global";
import { colors } from "./colors";

export const theme = extendTheme({
  styles: { global },
  fonts,
  components,
  colors,
});
