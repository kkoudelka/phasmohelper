import Head from 'next/head';
import React from 'react';
import { BoardContainer } from '../components/board';


const SinglePlayerPage: React.FC = () => {
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
