import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { theme } from "../styles/theme";

import { SidebarDrawerProvider } from "../contexts/SidebarDrawerContext";
import { makeServer } from "../services/mirage";
<<<<<<< HEAD
import { QueryClient, QueryClientProvider } from "react-query";
=======
>>>>>>> 0da4f7d7c853688905eb0f1eaf8ad69565d6c690

if (process.env.NODE_ENV === "development") {
  makeServer();
}
<<<<<<< HEAD

const queryClient = new QueryClient();
=======
>>>>>>> 0da4f7d7c853688905eb0f1eaf8ad69565d6c690

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
