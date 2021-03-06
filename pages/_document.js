import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&amp;family=Source+Sans+Pro:ital,wght@0,400;0,700;1,400;1,700&amp;display=swap"
            rel="stylesheet"
          />
          <link
            href="https://s3.amazonaws.com/assets-startchurch/assets/fonts/scicon/style.css"
            rel="stylesheet"
          ></link>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-5459676-1"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
