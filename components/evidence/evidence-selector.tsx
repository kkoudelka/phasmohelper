import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import { evidenceList } from '../../src/ghosts/evidence';
import EvidenceItem from './evidence-item';

interface IProps {
  readonly?: boolean;
}

const EvidenceSelector: React.FC<IProps> = ({ readonly }) => {
  return (
    <div>
      <Typography variant="h6">Evidence</Typography>
      <List component="nav">
        {evidenceList.map((x, key) => (
          <EvidenceItem
            key={`evidence-${key}`}
            evidence={x}
            readonly={readonly}
          />
        ))}
      </List>
    </div>
  );
};

export default EvidenceSelector;
