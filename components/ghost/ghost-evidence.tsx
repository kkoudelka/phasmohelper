import React from 'react';
import styles from '../../styles/GhostCard.module.css';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import { isEvidenceChecked } from '../../src/utils/evidence-helper';
import { useAppContext } from '../../src/hooks';
import Typography from '@material-ui/core/Typography';
import { IEvidenceCard } from '../../src/ghosts/evidence';

interface IProps {
  evidence: IEvidenceCard;
}

const GhostEvidence: React.FC<IProps> = ({ evidence }) => {
  const { mission } = useAppContext();

  return (
    <Grid
      item
      xs={4}
      container
      justify="center"
      direction="column"
      alignItems="center"
      className={clsx({
        [styles.checked]: isEvidenceChecked(evidence.type, mission.evidence),
      })}
    >
      <Grid item>{evidence.icon}</Grid>
      <Grid item className={styles.evidenceTitle}>
        <Typography variant="body2">{evidence.name}</Typography>
      </Grid>
    </Grid>
  );
};

export default GhostEvidence;
