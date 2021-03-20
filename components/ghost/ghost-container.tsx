import Grid from '@material-ui/core/Grid';
import React from 'react';
import { GhostItem } from '.';
import { ghosts } from '../../src/ghosts/ghosts';
import { useAppContext } from '../../src/hooks';
import { getAvailableGhosts } from '../../src/utils/ghost-helper';

const GhostContainer: React.FC = () => {
  const { currentEvidence } = useAppContext();
  const availableGhosts = getAvailableGhosts(currentEvidence);
  const notAvailable = ghosts.filter((x) => !availableGhosts.includes(x));

  return (
    <>
      <Grid container>
        {availableGhosts.map((x, key) => (
          <Grid item key={`ghost-card-${key}`} xs={12} md={4}>
            <GhostItem ghost={x} />
          </Grid>
        ))}
        {notAvailable.map((x, key) => (
          <Grid item key={`ghost-card-${key}`} xs={12} md={4}>
            <GhostItem ghost={x} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default GhostContainer;
