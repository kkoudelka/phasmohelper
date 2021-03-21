import Fade from '@material-ui/core/Fade';
import React, { useEffect } from 'react';
import { useTimer } from 'use-timer';
import { TimerDisplay } from '.';
import { useAppContext } from '../../src/hooks';
import { IPublicProps } from '../../src/utils/exps';

const HuntTimer: React.FC = () => {
  const { mission, setHunting } = useAppContext();
  const { hunting, difficulty } = mission;

  const huntEnd = async () => {
    if (!hunting) return;
    await setHunting(false);

    const game: IPublicProps = {
      ...document['game'],
      gamePhase: 'Investigating',
      huntRemainingTime: 0,
    };
    document['game'] = game;
  };

  const changeGlobalTime = (time: number) => {
    const game: IPublicProps = {
      ...document['game'],
      huntRemainingTime: time,
    };
    document['game'] = game;
  };

  const maxTime =
    difficulty === 'amateur' ? 25 : difficulty === 'intermediate' ? 35 : 50;

  // This is bad, but for some reason I am not able to change initial time in useTimer()
  // It will work for now
  const {
    time: timeAmateur,
    start: startAmateur,
    reset: resetAmateur,
  } = useTimer({
    initialTime: 25,
    endTime: 0,
    timerType: 'DECREMENTAL',
    onTimeOver: huntEnd,
    onTimeUpdate: changeGlobalTime,
  });

  const { time: timeMedium, start: startMedium, reset: resetMedium } = useTimer(
    {
      initialTime: 35,
      endTime: 0,
      timerType: 'DECREMENTAL',
      onTimeOver: huntEnd,
      onTimeUpdate: changeGlobalTime,
    },
  );

  const { time: timeHard, start: startHard, reset: resetHard } = useTimer({
    initialTime: 50,
    endTime: 0,
    timerType: 'DECREMENTAL',
    onTimeOver: huntEnd,
    onTimeUpdate: changeGlobalTime,
  });

  const startTimer = () => {
    switch (difficulty) {
      case 'amateur':
        startAmateur();
        break;
      case 'intermediate':
        startMedium();
        break;
      case 'professional':
        startHard();
        break;
    }
    const game: IPublicProps = {
      ...document['game'],
      gamePhase: 'Hunt',
    };
    document['game'] = game;
  };

  useEffect(() => {
    if (hunting) {
      startTimer();
    } else {
      setTimeout(() => {
        resetAmateur();
        resetHard();
        resetMedium();
      }, 1500);
    }
  }, [hunting]);

  const time =
    difficulty === 'amateur'
      ? timeAmateur
      : difficulty === 'intermediate'
      ? timeMedium
      : timeHard;

  return (
    <>
      <Fade in={hunting} unmountOnExit>
        <TimerDisplay
          min={0}
          max={maxTime}
          currentValue={time}
          text="Hunting: "
        />
      </Fade>
    </>
  );
};

export default HuntTimer;
