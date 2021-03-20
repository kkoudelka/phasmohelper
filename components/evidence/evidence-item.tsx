import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { IEvidenceCard } from '../../src/ghosts/evidence';
import { useAppContext } from '../../src/hooks';
import {
  isEvidenceAvailable,
  isEvidenceChecked,
} from '../../src/utils/evidence-helper';

interface IProps {
  evidence: IEvidenceCard;
}

const EvidenceItem: React.FC<IProps> = ({ evidence }) => {
  const { mission, changeEvidence } = useAppContext();

  const { evidence: mEvidence } = mission;

  const isAvailable = isEvidenceAvailable(evidence.type, mEvidence);

  const handleToggle = async () => {
    await changeEvidence(evidence.type);
  };

  const { icon, name } = evidence;

  return (
    <ListItem
      button
      selected={isEvidenceChecked(evidence.type, mEvidence)}
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
