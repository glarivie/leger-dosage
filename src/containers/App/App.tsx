import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';

import Header from 'components/Header';
import Footer from 'components/Footer';

import styles from './App.module.scss';

const App = ({ Component, pageProps }: AppProps) => (
  <div className={styles.App}>
    <Head>
      <title>Bonjour ! Je suis Debora Larivière - Junior UI/UX Designer.</title>
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <meta property="og:title" content="Bonjour ! Je suis Debora Larivière - Junior UI/UX Designer." />
      <meta property="og:type" content="website" />
      {/* <meta property="og:url" content={`${process.env.NEXT_PUBLIC_STATIC_FRONTEND_ROOT}${url}`} /> */}
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content="Léger Dosage" />
      <meta name="theme-color" content="#25a4e8" />
    </Head>
    <div className={styles.page}>
      <Header />
      <Component {...pageProps} />
    </div>
    <Footer />
  </div>
);

export default App;
