import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import { ChartComp } from '.';
import { Card } from '../card';

const PredictionPanel: React.FC = () => {
  return (
    <div>
      <Fade in unmountOnExit>
        <Card>
          <Grid container>
            <Grid item>
              <ChartComp />
            </Grid>
          </Grid>
        </Card>
      </Fade>
    </div>
  );
};

export default PredictionPanel;
