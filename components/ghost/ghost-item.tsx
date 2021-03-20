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

interface IProps {
  ghost: IGhost;
}

const GhostItem: React.FC<IProps> = ({ ghost }) => {
  const { currentEvidence } = useAppContext();
  const { name } = ghost;
  const evidence = getEvidenceForGhost(ghost);
  const isAvailable = isGhostAvailable(ghost, currentEvidence);

  return (
    <>
      <Card disabled={!isAvailable} className={styles.ghostCard}>
        <Grid container direction="column" spacing={2} alignItems="center">
          <Grid item>
            <Typography variant="h6">{name}</Typography>
          </Grid>
          <Grid item container direction="row" justify="space-between">
            {evidence.map((e: IEvidenceCard, key) => (
              <Grid
                key={`ghost-evidence-${name}-${key}`}
                item
                xs={4}
                container
                justify="center"
                direction="column"
                alignItems="center"
                className={clsx({
                  [styles.checked]: isEvidenceChecked(e.type, currentEvidence),
                })}
              >
                <Grid item>
                  <Typography variant="body2" style={{ textAlign: 'center' }}>
                    {e.name}
                  </Typography>
                </Grid>
                <Grid item>{e.icon}</Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default GhostItem;
