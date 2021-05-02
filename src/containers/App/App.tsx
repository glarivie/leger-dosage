import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";

import Header from "components/Header";
import Footer from "components/Footer";
import colors from "constants/colors";

import styles from "./App.module.scss";

const App = ({ Component, pageProps }: AppProps) => {
  const metaTitle = "Bonjour ! Je suis Débora Larivière, UX/UI Designer.";

  return (
    <div className={styles.App}>
      <Head>
        <title>{metaTitle}</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta property="og:title" content={metaTitle} />
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
