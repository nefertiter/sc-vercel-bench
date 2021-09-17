import { useEffect } from "react";
import TagManager from "react-gtm-module";
import "../styles/globals.scss";
import type { AppProps } from "next/app";

const tagManagerArgs = {
  gtmId: "GTM-GTM-5V6FR3",
};

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  return <Component {...pageProps} />;
}
export default MyApp;
