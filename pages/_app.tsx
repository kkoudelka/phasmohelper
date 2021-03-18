import React from 'react';
import { MainLayout } from '../components/layout';
import { ThemeContainer } from '../components/themes';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeContainer>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeContainer>
  );
};

export default MyApp;
