import { GetServerSideProps } from 'next';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { firestore } from '../../src/fbase/fbase';
import { BoardContainer } from '../../components/board';
import { ISessionDoc } from '../../components/context/app-context';
import { useAppContext } from '../../src/hooks';
import Head from 'next/head';
import { useSnackbar } from 'notistack';

function SessionPage({ id }) {
  const router = useRouter();
  const { setSessionDetails, setMission } = useAppContext();
  const { enqueueSnackbar } = useSnackbar();

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
      enqueueSnackbar('This session no longer exists', {
        variant: 'error',
      });
      await router.push('/');
      return;
    }

    setSessionDetails({ sessionDocId: doc.id, sessionFriendlyId: id });

    doc.ref.onSnapshot((data) => {
      const sessionDocument = data.data() as ISessionDoc;
      if (!sessionDocument) {
        router.push('/');
        return;
      }
      setMission(sessionDocument.mission);
    });
  };

  return (
    <div>
      <Head>
        <title>Multiplayer session | PhasmoHelper</title>
      </Head>
      <BoardContainer />
    </div>
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
