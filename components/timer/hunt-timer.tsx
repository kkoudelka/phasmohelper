import Fade from '@material-ui/core/Fade';
import React, { useEffect } from 'react';
import { useTimer } from 'use-timer';
import { TimerDisplay } from '.';
import { useAppContext } from '../../src/hooks';
import {
  getPublicProps,
  IPublicProps,
  updatePublicProps,
} from '../../src/utils/exps';

const HuntTimer: React.FC = () => {
  const { mission, setHunting } = useAppContext();
  const { hunting, difficulty } = mission;

  const huntEnd = async () => {
    if (!hunting) return;
    await setHunting(false);

    const game: IPublicProps = {
      ...getPublicProps(),
      gamePhase: 'Investigating',
      huntRemainingTime: 0,
    };
    updatePublicProps(game);
  };

  const changeGlobalTime = (time: number) => {
    const game: IPublicProps = {
      ...getPublicProps(),
      huntRemainingTime: time,
    };
    updatePublicProps(game);
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
      ...getPublicProps(),
      gamePhase: 'Hunt',
    };
    updatePublicProps(game);
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
