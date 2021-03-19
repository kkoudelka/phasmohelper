import React, { useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import { IEvidenceCard } from '../../src/ghosts/evidence';
import { useAppContext } from '../../src/hooks';
import { isEvidenceAvailable } from '../../src/utils/evidence-helper';

interface IProps {
  evidence: IEvidenceCard;
}

const EvidenceItem: React.FC<IProps> = ({ evidence }) => {
  const { currentEvidence, setCurrentEvidence } = useAppContext();

  const isChecked: boolean = currentEvidence[evidence.type];

  const isAvailable = isEvidenceAvailable(evidence.type, currentEvidence);

  const handleToggle = () => {
    setCurrentEvidence({ ...currentEvidence, [evidence.type]: !isChecked });
  };

  const { icon, name } = evidence;

  return (
    <ListItem
      button
      selected={isChecked}
      onClick={handleToggle}
      disabled={!isAvailable}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText
        primary={`${name} ${isAvailable ? '' : '(Not available)'}`}
      />
    </ListItem>
  );
};

export default EvidenceItem;
