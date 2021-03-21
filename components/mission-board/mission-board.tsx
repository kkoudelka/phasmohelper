import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { DifficultyDisplay, GhostName, ObjectivesContainer } from '.';
import { HuntTimer } from '../timer';

const MissionBoard: React.FC = () => {
  return (
    <>
      <Typography variant="h6">Mission board</Typography>
      <Grid container direction="row" spacing={1}>
        <Grid item xs={12} md={4} container direction="column" spacing={1}>
          <Grid item>
            <GhostName />
          </Grid>
          <Grid item>
            <DifficultyDisplay />
          </Grid>
          <Grid item>
            <HuntTimer />
          </Grid>
        </Grid>
        <Grid item xs={12} md={8} container direction="column">
          <ObjectivesContainer />
        </Grid>
      </Grid>
    </>
  );
};

export default MissionBoard;
