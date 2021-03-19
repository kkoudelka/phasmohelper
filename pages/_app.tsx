import React from 'react';
import { AContext } from '../components/context/app-context';
import { MainLayout } from '../components/layout';
import { ThemeContainer } from '../components/themes';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <AContext.Provider>
      <ThemeContainer>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeContainer>
    </AContext.Provider>
  );
};

export default MyApp;
