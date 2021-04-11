import { GetServerSideProps } from 'next';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { firestore } from '../../../src/fbase/fbase';
import { ViewBoardContainer } from '../../../components/board';
import { IMission, ISessionDoc } from '../../../components/context/app-context';
import { useAppContext } from '../../../src/hooks';
import Head from 'next/head';
import { useSnackbar } from 'notistack';

interface IProps {
  id: string;
}

const SessionPage: React.FC<IProps> = ({ id }) => {
  const router = useRouter();
  const { setSessionDetails, setMission } = useAppContext();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    checkCodeValid();
  }, []);

  const checkCodeValid = async () => {
    const res = await firestore
      .collection('sessions')
      .where('readID', '==', id)
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

    setSessionDetails({ sessionDocId: doc.id });

    doc.ref.onSnapshot((data) => {
      const sessionDocument = data.data() as ISessionDoc;
      if (!sessionDocument) {
        router.push('/');
        return;
      }
      const mission: IMission = {
        ...sessionDocument.mission,
        start: (sessionDocument.mission.start as any).toDate() ?? new Date(),
      };
      setMission(mission);
    });
  };

  return (
    <div>
      <Head>
        <title>Multiplayer session | PhasmoHelper</title>
      </Head>
      <ViewBoardContainer />
    </div>
  );
};

export default SessionPage;

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
