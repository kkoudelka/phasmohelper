import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Card } from '../card';
import Speech from '../speech-recognition';
import { EvidenceSelector } from '../evidence';
import { GhostContainer } from '../ghost';

const BoardContainer: React.FC = () => {
  return (
    <Grid container>
      <Grid item md={8} xs={12} sm={6}>
        <Card>
          <GhostContainer />
        </Card>
      </Grid>
      <Grid item md={4} xs={12} sm={6} container direction="column" spacing={1}>
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
      </Grid>
    </Grid>
  );
};

export default BoardContainer;
