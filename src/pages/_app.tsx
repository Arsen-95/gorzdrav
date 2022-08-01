import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";
import { appWithTranslation } from "next-i18next";

import Fonts from "@shared/assets/font";
import { theme } from "@shared/config/chakra-themes";
import "./style.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      })
  );
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ChakraProvider theme={theme}>
          <Fonts />
          <Component {...pageProps} />
        </ChakraProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default appWithTranslation(MyApp);
