import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { getPercentageBetween } from '../../src/utils/utils';

interface IProps {
  currentValue: number;
  min: number;
  max: number;
  text?: string;
}

const TimerDisplay: React.FC<IProps> = ({
  currentValue,
  min,
  max,
  text = '',
}) => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Typography variant="body1">
          {text} {currentValue}s
        </Typography>
      </Grid>
      <Grid item>
        <LinearProgress
          value={getPercentageBetween(min, max, currentValue)}
          variant="determinate"
        />
      </Grid>
    </Grid>
  );
};

export default TimerDisplay;
