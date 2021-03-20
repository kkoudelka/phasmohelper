import Head from 'next/head';
import React from 'react';
import { useEffect } from 'react';
import { BoardContainer } from '../components/board';
import { useAppContext } from '../src/hooks';

const SinglePlayerPage: React.FC = () => {
  const { setSessionDetails } = useAppContext();

  useEffect(() => {
    setSessionDetails(null);
  }, []);

  return (
    <div>
      <Head>
        <title>Singleplayer | Phasmophobia Cheatsheet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BoardContainer />
    </div>
  );
};

export default SinglePlayerPage;
