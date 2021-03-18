import { Button, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Head from 'next/head';
import React from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Phasmophobia Cheatsheet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item>
          <Typography variant="h4">Phasmophobia cheatsheet</Typography>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justify="center"
          style={{ marginTop: 20 }}
        >
          <Grid item className={styles.btn}>
            <Link href="/singleplayer">
              <Button variant="contained" color="primary">
                Singleplayer
              </Button>
            </Link>
          </Grid>
          <Grid item className={styles.btn}>
            <Button variant="contained" color="primary">
              Create session
            </Button>
          </Grid>
          <Grid item className={styles.btn}>
            <Button variant="contained" color="primary">
              Join session
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
