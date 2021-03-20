import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { GhostName, ObjectivesContainer } from '.';

const MissionBoard: React.FC = () => {
  return (
    <>
      <Typography variant="h6">Mission board</Typography>
      <Grid container direction="row" spacing={1}>
        <Grid item xs={12} md={4}>
          <GhostName />
        </Grid>
        <Grid item xs={12} md={8}>
          <ObjectivesContainer />
        </Grid>
      </Grid>
    </>
  );
};

export default MissionBoard;
