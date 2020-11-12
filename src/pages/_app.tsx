import React, { Fragment } from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';

import '../styles/globals.scss';

const App = ({ Component, pageProps }: AppProps) => (
  <Fragment>
    <Head>
      <title>Bonjour ! Je suis Debora Lariviere - Junior UI/UX Designer.</title>
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    </Head>
    <Component {...pageProps} />
  </Fragment>
);

export default App;
