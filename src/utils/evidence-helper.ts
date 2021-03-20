import { evidenceList, EvidenceType, IEvidenceCard } from '../ghosts/evidence';
import { IGhost } from '../ghosts/ghosts';
import { IObjective, objectives, ObjectiveType } from '../ghosts/objectives';
import { getAvailableGhosts2 } from './ghost-helper';

export const isEvidenceAvailable = (
  type: EvidenceType,
  currentEvidence: EvidenceType[],
): boolean => {
  const ghosts = getAvailableGhosts2(currentEvidence);
  const res = ghosts.some((x) => x.evidence[type] === true);
  return res;
};

export const isEvidenceChecked = (
  evidenceType: EvidenceType,
  currentEvidence: EvidenceType[],
): boolean => {
  return currentEvidence.includes(evidenceType);
};

const getEvidenceCardByType = (type: EvidenceType): IEvidenceCard => {
  return evidenceList.find((evidence) => evidence.type === type);
};

export const getEvidenceForGhost = (ghost: IGhost): IEvidenceCard[] => {
  return ghost.evidence2.map((x) => getEvidenceCardByType(x));
};

export const getObjective = (objective: ObjectiveType): IObjective => {
  return objectives.find((x) => x.type === objective);
};
