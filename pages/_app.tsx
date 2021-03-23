import React, { useEffect } from 'react';
import { AContext } from '../components/context/app-context';
import { MainLayout } from '../components/layout';
import { ThemeContainer } from '../components/themes';
import { SnackbarProvider } from 'notistack';
import '../styles/globals.css';
import Head from 'next/head';
import TagManager from 'react-gtm-module';

const MyApp = ({ Component, pageProps }) => {
  const tagManagerArgs = {
    gtmId: 'GTM-MS849R4',
  };

  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta
          name="msapplication-config"
          content="/favicons/browserconfig.xml"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="PhasmoHelper is a companion app assisting players to keep track of the evidence and objectives in game Phasmophobia."
        />
        <meta
          name="keywords"
          content="Phasmophobia, PhasmoHelper, Phasmo, Evidence journal, Companion app, Web app,  Evidence list"
        />
      </Head>
      <AContext.Provider>
        <SnackbarProvider>
          <ThemeContainer>
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
          </ThemeContainer>
        </SnackbarProvider>
      </AContext.Provider>
    </>
  );
};

export default MyApp;
