import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { DifficultyDisplay, GhostName, ObjectivesContainer } from '.';
import { useAppContext } from '../../src/hooks';
import { GameTime, HuntTimer } from '../timer';

interface IProps {
  readonly?: boolean;
}

const MissionBoard: React.FC<IProps> = ({ readonly }) => {
  const { reset } = useAppContext();

  return (
    <div>
      <Grid container justify="space-between">
        <Grid item>
          <Typography variant="h6">Mission board</Typography>
        </Grid>
        {!readonly && (
          <Grid item>
            <Button variant="contained" color="primary" onClick={reset}>
              Start new mission
            </Button>
          </Grid>
        )}
      </Grid>
      <Grid container direction="row" spacing={1}>
        <Grid item xs={12} md={4} container direction="column" spacing={1}>
          <Grid item>
            <GhostName readonly={readonly} />
          </Grid>
          <Grid item>
            <DifficultyDisplay />
          </Grid>
          <Grid item>
            <GameTime />
          </Grid>
          <Grid item>
            <HuntTimer />
          </Grid>
        </Grid>
        <Grid item xs={12} md={8} container direction="column">
          <ObjectivesContainer />
        </Grid>
      </Grid>
    </div>
  );
};

export default MissionBoard;
