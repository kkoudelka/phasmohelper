import React, { useEffect } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { IEvidenceCard } from '../../src/ghosts/evidence';
import { useAppContext } from '../../src/hooks';
import {
  isEvidenceAvailable,
  isEvidenceChecked,
} from '../../src/utils/evidence-helper';
import useSound from 'use-sound';

interface IProps {
  evidence: IEvidenceCard;
  readonly?: boolean;
}

const EvidenceItem: React.FC<IProps> = ({ evidence, readonly }) => {
  const { mission, changeEvidence } = useAppContext();
  const [playSelect] = useSound('/sounds/select.wav', { volume: 0.5 });
  const [playDeselect] = useSound('/sounds/deselect.wav', { volume: 0.5 });

  const { evidence: mEvidence } = mission;

  const isAvailable = isEvidenceAvailable(evidence.type, mEvidence);

  const isChecked = isEvidenceChecked(evidence.type, mEvidence);

  useEffect(() => {
    if (isChecked) playSelect();
    else playDeselect();
  }, [isChecked]);

  const handleToggle = async () => {
    if (readonly) return;
    await changeEvidence(evidence.type);
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
