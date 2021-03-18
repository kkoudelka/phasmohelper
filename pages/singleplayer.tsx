import Grid from '@material-ui/core/Grid';
import Head from 'next/head';
import React from 'react';
import Card from '../components/card/card';

const SinglePlayerPage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Singleplayer | Phasmophobia Cheatsheet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid container>
        <Grid item md={8} xs={12} sm={6}>
          <Card>Tests</Card>
        </Grid>
        <Grid item md={4} xs={12} sm={6}>
          <Card>Tests</Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default SinglePlayerPage;
