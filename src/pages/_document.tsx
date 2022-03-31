import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

          {/* <link rel="shortcut icon" href="/icon.png" type="image/png" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />

          <script src="https://unpkg.com/aos@next/dist/aos.js"></script>

          <script>
            AOS.init()
          </script>
        </body>
      </Html>
    );
  }
}