import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";

import Header from "components/Header";
import Footer from "components/Footer";
import colors from "constants/colors";

import styles from "./App.module.scss";

const App = ({ Component, pageProps }: AppProps) => {
  const metaTitle = "Bonjour ! Je suis Débora Larivière, UX/UI Designer.";
  const metaDescription =
    "Je m’intéresse aux usages liées aux nouvelles technologies afin de concevoir des expériences innovantes, intuitives et engageantes pour les utilisateurs.";

  return (
    <div className={styles.App}>
      <Head>
        <title>{metaTitle}</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,700;1,400&family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og_image.jpg" />
        <meta property="og:url" content="https://leger-dosage.fr" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="Léger Dosage" />
        <meta name="theme-color" content={colors.dark} />
      </Head>
      <div className={styles.page}>
        <Header />
        <Component {...pageProps} metaTitle={metaTitle} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
