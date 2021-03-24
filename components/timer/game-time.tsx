import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useTimer } from 'use-timer';
import { useAppContext } from '../../src/hooks';

const GameTime: React.FC = () => {
  const { mission } = useAppContext();

  const { start: missionStart } = mission;

  const { time, advanceTime, reset, start } = useTimer({
    timerType: 'INCREMENTAL',
    autostart: true,
  });

  const advance = () => {
    const now = moment();
    const mStart = moment(missionStart);
    const dif = Math.round(moment.duration(now.diff(mStart)).asSeconds());
    if (dif > 0) advanceTime(dif);
  };

  useEffect(() => {
    reset();
    start();
    advance();
  }, [missionStart]);

  useEffect(() => {
    advance();
  }, []);

  return <div>{moment().startOf('day').seconds(time).format('mm:ss')}</div>;
};

export default GameTime;
