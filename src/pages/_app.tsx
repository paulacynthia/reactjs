import { AppProps } from "next/app";
import { Header } from "../components/Header";
import { SessionProvider as NextAuthProvider } from "next-auth/react";

import "../styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      {/*Basicamente, quando der um F5 se o user tá logado ou não chegará ao NextAuthProvider através do pageProps */}
      <Header />
      <Component {...pageProps} />
    </NextAuthProvider>
  );
}

export default MyApp;
