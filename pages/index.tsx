import { Button, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Head from 'next/head';
import React from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { getSessionId } from '../src/utils/generator';
import { useRouter } from 'next/router';

const HomePage: React.FC = () => {
  const router = useRouter();
  const abcd = async () => {
    const { firestore } = firebase;
    const id = await getSessionId();
    await firestore().collection('sessions').doc().set({ sessionID: id });
    router.push(`/session/${id}`);
  };

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
            <Button variant="contained" color="primary" onClick={abcd}>
              Create session
            </Button>
          </Grid>
          <Grid item className={styles.btn}>
            <Button variant="contained" color="primary" disabled>
              Join session
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
