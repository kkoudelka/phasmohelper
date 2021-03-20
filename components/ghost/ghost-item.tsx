import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { IEvidenceCard } from '../../src/ghosts/evidence';
import { IGhost } from '../../src/ghosts/ghosts';
import { useAppContext } from '../../src/hooks';
import {
  getEvidenceForGhost,
  isEvidenceChecked,
} from '../../src/utils/evidence-helper';
import { isGhostAvailable } from '../../src/utils/ghost-helper';
import { Card } from '../card';
import styles from '../../styles/GhostCard.module.css';
import clsx from 'clsx';
import { GhostEvidence } from '.';

interface IProps {
  ghost: IGhost;
}

const GhostItem: React.FC<IProps> = ({ ghost }) => {
  const { mission } = useAppContext();
  const { name } = ghost;
  const evidence = getEvidenceForGhost(ghost);
  const currentEvidence = evidence.filter((x) =>
    isEvidenceChecked(x.type, mission.evidence),
  );
  const missingEvidence = evidence.filter((x) => !currentEvidence.includes(x));
  const isAvailable = isGhostAvailable(ghost, mission.evidence);

  return (
    <>
      <Card disabled={!isAvailable} className={styles.ghostCard}>
        <Grid container direction="column" spacing={2} alignItems="center">
          <Grid item>
            <Typography variant="h6">{name}</Typography>
          </Grid>
          <Grid item container direction="row" justify="space-between">
            {currentEvidence.map((e, key) => (
              <GhostEvidence
                key={`ghost-evidence-${name}-${key}`}
                evidence={e}
              />
            ))}
            {missingEvidence.map((e, key) => (
              <GhostEvidence
                key={`ghost-evidence-${name}-${key}`}
                evidence={e}
              />
            ))}
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default GhostItem;
