import { GetServerSideProps } from 'next';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { firestore } from '../../src/fbase/fbase';
import { BoardContainer } from '../../components/board';
import { ISessionDoc } from '../../components/context/app-context';
import { useAppContext } from '../../src/hooks';
import Head from 'next/head';

function SessionPage({ id }) {
  const router = useRouter();
  const { setSessionDetails, setCurrentEvidence } = useAppContext();

  useEffect(() => {
    checkCodeValid();
  }, []);

  const checkCodeValid = async () => {
    const res = await firestore
      .collection('sessions')
      .where('sessionID', '==', id)
      .limit(1)
      .get();
    const doc = res.docs[0];
    if (!doc?.exists ?? false) {
      await router.push('/');
      return;
    }

    setSessionDetails({ sessionDocId: doc.id, sessionFriendlyId: id });

    doc.ref.onSnapshot((data) => {
      const a = data.data() as ISessionDoc;
      if (!a) {
        router.push('/');
        return;
      }
      setCurrentEvidence(a.evidence);
    });
  };

  return (
    <>
      <Head>
        <title>Multiplayer session | Phasmophobia Cheatsheet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BoardContainer />
    </>
  );
}

export default SessionPage;

interface IProps {
  id: string;
}

export const getServerSideProps: GetServerSideProps<IProps> = async (
  context,
) => {
  const id = context.query.id.toString() || '';

  return {
    props: {
      id,
    },
  };
};
