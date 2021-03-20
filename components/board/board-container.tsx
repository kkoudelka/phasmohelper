import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Card } from '../card';
import Speech from '../speech-recognition';
import { EvidenceSelector } from '../evidence';
import { GhostContainer } from '../ghost';
import { SessionCode } from '../join-session';
import { useAppContext } from '../../src/hooks';
import { MissionBoard } from '../mission-board';

const BoardContainer: React.FC = () => {
  const { sessionDetails } = useAppContext();
  return (
    <Grid container>
      <Grid item md={8} xs={12} sm={6}>
        <Card>
          <GhostContainer />
        </Card>
      </Grid>
      <Grid item md={4} xs={12} sm={6} container direction="column" spacing={1}>
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
      </Grid>
    </Grid>
  );
};

export default BoardContainer;
