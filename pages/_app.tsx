import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AuthProvider } from "../context/AuthContext";

import { useRouter } from "next/router";
import { useEffect } from "react";
import * as gtag from "../helpers/gtag";
const isProduction = process.env.NODE_ENV === "production";
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      /* invoke analytics function only for production */
      if (isProduction) gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </AuthProvider>
    </>
  );
}

export default MyApp;
