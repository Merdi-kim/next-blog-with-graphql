import React from 'react';
import { Header } from '../components';
import type { AppProps } from 'next/app';
import ProgressBar from '@badrap/bar-of-progress';
import Router from 'next/router';
import '../styles/globals.scss';

const progress = new ProgressBar({
  size: 4,
  color: 'rgb(96 165 250)',
  className: 'z-50',
  delay: 100,
});

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
