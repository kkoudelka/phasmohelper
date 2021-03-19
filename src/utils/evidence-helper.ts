import { evidenceList, EvidenceType, IEvidenceCard } from '../ghosts/evidence';
import { IEvidence, IGhost } from '../ghosts/ghosts';
import { getAvailableGhosts } from './ghost-helper';

export const isEvidenceAvailable = (
  type: EvidenceType,
  currentEvidence: IEvidence,
): boolean => {
  const ghosts = getAvailableGhosts(currentEvidence);
  const res = ghosts.some((x) => x.evidence[type] === true);
  return res;
};

export const isEvidenceChecked = (
  evidenceType: EvidenceType,
  currentEvidence: IEvidence,
): boolean => {
  return currentEvidence[evidenceType];
};

const getEvidenceCardByType = (type: EvidenceType): IEvidenceCard => {
  return evidenceList.find((evidence) => evidence.type === type);
};

export const getEvidenceForGhost = (ghost: IGhost): IEvidenceCard[] => {
  return ghost.evidence2.map((x) => getEvidenceCardByType(x));
};
