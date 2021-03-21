import React, { useEffect, useRef, useState } from 'react';
import Plyr from 'plyr';
import Head from 'next/head';
import { useAppContext } from '../../src/hooks';

const SongPlayer: React.FC = () => {
  const videoEl = useRef(null);
  const [player, setPlayer] = useState<Plyr>(null);
  const { mission } = useAppContext();

  useEffect(() => {
    updateSource();
  }, [mission.song]);

  const createPlayer = () => {
    if (!videoEl || !videoEl.current) return;
    if (player) return;

    const p = new Plyr(videoEl.current, {
      controls: ['mute', 'volume'],
      volume: 0.15,
    });
    setPlayer(p);
  };

  const updateSource = async () => {
    if (!player) return;

    if (mission.song === 'none') {
      player.muted = true;
      return;
    }
    player.rewind(500);
    player.muted = false;

    await player.play();
  };

  useEffect(() => {
    createPlayer();
  }, [videoEl]);

  useEffect(() => {
    createPlayer();
  }, []);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdn.plyr.io/3.6.4/plyr.css" />
      </Head>

      <audio ref={videoEl} autoPlay={true}>
        {mission.song !== 'none' && (
          <source src={`/sounds/songs/${mission.song}.mp3`} type="audio/mp3" />
        )}
      </audio>
    </>
  );
};

export default SongPlayer;
