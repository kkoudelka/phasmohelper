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
import { PredictionPanel } from '../prediction';

const ViewBoardContainer: React.FC = () => {
  const { mission } = useAppContext();
  return (
    <Grid container>
      <Grid item md={7} xs={12} sm={6} container direction="column">
        <Grid item>
          <Card>
            <GhostContainer />
          </Card>
        </Grid>
      </Grid>
      <Grid item md={5} xs={12} sm={6} container direction="column">
        <Grid item>
          <Card>
            <MissionBoard readonly />
          </Card>
        </Grid>
        <Grid item>
          <Card>
            <EvidenceSelector readonly />
          </Card>
        </Grid>
        <Grid item>
          <PredictionPanel />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ViewBoardContainer;
