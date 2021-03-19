import firebase from 'firebase';
import React, { useEffect } from 'react';
import { AContext } from '../components/context/app-context';
import { MainLayout } from '../components/layout';
import { ThemeContainer } from '../components/themes';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    if (firebase.apps.length > 0) return;

    const firebaseConfig = {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_TOKEN,
      authDomain: 'phasmophobia-cheatsheet.firebaseapp.com',
      projectId: 'phasmophobia-cheatsheet',
      storageBucket: 'phasmophobia-cheatsheet.appspot.com',
      messagingSenderId: '223315520460',
      appId: '1:223315520460:web:831e3d1bcdea96381ccb69',
    };

    firebase.initializeApp(firebaseConfig);
  }, []);

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
