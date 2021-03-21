import React from 'react';
import { AContext } from '../components/context/app-context';
import { MainLayout } from '../components/layout';
import { ThemeContainer } from '../components/themes';
import { SnackbarProvider } from 'notistack';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <AContext.Provider>
      <SnackbarProvider>
        <ThemeContainer>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </ThemeContainer>
      </SnackbarProvider>
    </AContext.Provider>
  );
};

export default MyApp;
