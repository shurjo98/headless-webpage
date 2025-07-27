/** routes/_app.tsx – Global layout */
import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts"; // ← import Head
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <title>HeadlessPro</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700&display=swap"
          rel="stylesheet"
        />
        {/* ensure Tailwind’s output is always loaded */}
        <link rel="stylesheet" href="/styles.css" />
      </Head>

      <Header />
      <Component />
      <Footer />
    </>
  );
}
