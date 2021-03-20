import { Button, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Head from 'next/head';
import React from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { getSessionId } from '../src/utils/generator';
import { useRouter } from 'next/router';
import { firestore } from '../src/fbase/fbase';
import { defaults, ISessionDoc } from '../components/context/app-context';
import { JoinSession } from '../components/join-session';

const HomePage: React.FC = () => {
  const router = useRouter();
  const abcd = async () => {
    const id = await getSessionId();
    const data: ISessionDoc = {
      sessionID: id,
      evidence: defaults.currentEvidence,
    };
    await firestore.collection('sessions').doc().set(data);
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
            <JoinSession />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
