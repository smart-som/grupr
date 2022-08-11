import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import initAuth from "../helpers/initAuth"; // the module you created above

function MyApp({ Component, pageProps }: AppProps) {
  initAuth();
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
