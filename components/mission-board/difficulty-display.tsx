import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useAppContext } from '../../src/hooks';

const DifficultyDisplay: React.FC = () => {
  const { mission } = useAppContext();
  const { difficulty } = mission;

  return (
    <>
      <Typography variant="body1">Difficulty: {difficulty}</Typography>
    </>
  );
};

export default DifficultyDisplay;
