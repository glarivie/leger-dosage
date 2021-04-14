import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';

import Header from 'components/Header';
import Footer from 'components/Footer';

import styles from './App.module.scss';

const App = ({ Component, pageProps }: AppProps) => {
  const metaTitle = 'Bonjour ! Je suis Débora Larivière, UX/UI Designer.';

  return (
    <div className={styles.App}>
      <Head>
        <title>{metaTitle}</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/site_miniature.png" />
        <meta property="og:url" content="https://leger-dosage.fr" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="Léger Dosage" />
        <meta name="theme-color" content="#25a4e8" />
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
