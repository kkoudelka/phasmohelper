import { GetServerSideProps } from 'next';
import React from 'react';

const SessionPage: React.FC<IProps> = ({ id }) => {
  return <>{id}</>;
};

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
