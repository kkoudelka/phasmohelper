import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Card } from '../card';
import Speech from '../speech-recognition';
import { EvidenceSelector } from '../evidence';
import { GhostContainer } from '../ghost';
import { SessionCode } from '../join-session';
import { useAppContext } from '../../src/hooks';
import { MissionBoard } from '../mission-board';
import { SongPlayer } from '../player';
import { Fade } from '@material-ui/core';
import { TipBoard } from '../tips';

const BoardContainer: React.FC = () => {
  const { sessionDetails, mission } = useAppContext();
  return (
    <Grid container>
      <Grid item md={7} xs={12} sm={6} container direction="column">
        <Grid item>
          <Card>
            <GhostContainer />
          </Card>
        </Grid>
        <Grid item>
          <TipBoard />
        </Grid>
      </Grid>
      <Grid item md={5} xs={12} sm={6} container direction="column" spacing={1}>
        {sessionDetails && (
          <Grid item>
            <Card>
              <SessionCode />
            </Card>
          </Grid>
        )}
        <Grid item>
          <Card>
            <Speech />
          </Card>
        </Grid>
        <Grid item>
          <Card>
            <EvidenceSelector />
          </Card>
        </Grid>
        <Grid item>
          <Card>
            <MissionBoard />
          </Card>
        </Grid>
        <Fade in={mission.song !== 'none'}>
          <Grid item>
            <Card>
              <SongPlayer />
            </Card>
          </Grid>
        </Fade>
      </Grid>
    </Grid>
  );
};

export default BoardContainer;
