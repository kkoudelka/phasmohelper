import moment from 'moment';
import React, { useEffect } from 'react';
import { useTimer } from 'use-timer';
import { useAppContext } from '../../src/hooks';

const GameTime: React.FC = () => {
  const { mission } = useAppContext();

  const { start: missionStart } = mission;

  const initial = Math.abs(
    (new Date().getTime() - missionStart.getTime()) / 1000,
  );

  const { time, start, reset } = useTimer({
    initialTime: initial,
    timerType: 'INCREMENTAL',
    autostart: true,
  });

  useEffect(() => {
    reset();
    start();
  }, [missionStart]);

  return <div>{moment().startOf('day').seconds(time).format('mm:ss')}</div>;
};

export default GameTime;
