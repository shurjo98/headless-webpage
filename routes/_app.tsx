/** routes/_app.tsx – Global layout with responsive design */
import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import Header from "../islands/Header.tsx";
import Footer from "../components/Footer.tsx";
import AOSProvider from "../islands/AOSProvider.tsx";


export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <title>HeadlessPro - Launch Once, Grow Everywhere</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="The complete headless commerce platform that scales with your business. Launch once, grow everywhere." />
        <meta name="keywords" content="headless commerce, ecommerce platform, API-first, modern commerce" />
        <meta name="author" content="HeadlessPro" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://headlesspro.com/" />
        <meta property="og:title" content="HeadlessPro - Launch Once, Grow Everywhere" />
        <meta property="og:description" content="The complete headless commerce platform that scales with your business." />
        <meta property="og:image" content="/images/og-image.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://headlesspro.com/" />
        <meta property="twitter:title" content="HeadlessPro - Launch Once, Grow Everywhere" />
        <meta property="twitter:description" content="The complete headless commerce platform that scales with your business." />
        <meta property="twitter:image" content="/images/og-image.png" />

        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

        {/* Professional Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        
        {/* Styles */}
        <link rel="stylesheet" href="/styles.css" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/images/logo.png" as="image" />
      </Head>

      <div class="min-h-screen flex flex-col">
        <Header />
        <main class="flex-1">
           <AOSProvider />
          <Component />
        </main>
        <Footer />
      </div>
    </>
  );
}
