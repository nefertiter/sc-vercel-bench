import { useEffect } from "react";
import TagManager from "react-gtm-module";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

const tagManagerArgs = {
  gtmId: "GTM-5V6FR3",
};

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);
  useEffect(() => {
    import("react-facebook-pixel")
      .then(x => x.default)
      .then(ReactPixel => {
        ReactPixel.init("545425799568971"); // facebookPixelId
        ReactPixel.pageView();

        router.events.on("routeChangeComplete", () => {
          ReactPixel.pageView();
        });
      });
  }, [router.events]);

  return <Component {...pageProps} />;
}
export default MyApp;
