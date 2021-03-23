import { ITipCard } from '../../components/tips/tip-board';
import { evidenceList, EvidenceType, IEvidenceCard } from '../ghosts/evidence';
import { IGhost } from '../ghosts/ghosts';
import { IObjective, objectives, ObjectiveType } from '../ghosts/objectives';
import { getAvailableGhosts2 } from './ghost-helper';
import { getEvidenceOccurances } from './utils';

export type DifficultyType = 'amateur' | 'intermediate' | 'professional';

export const isEvidenceAvailable = (
  type: EvidenceType,
  currentEvidence: EvidenceType[],
): boolean => {
  const ghosts = getAvailableGhosts2(currentEvidence);
  const res = ghosts.some((x) => x.evidence2.includes(type) === true);
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

export const getTips = (evidence: EvidenceType[]): ITipCard[] => {
  let tips = [];

  const availableG = getAvailableGhosts2(evidence);

  if (!evidence.length) {
    return [{ text: 'Find at least one piece of evidence' }];
  }

  if (evidence.length === 1) {
    const availableEvidence: EvidenceType[] = []
      .concat(...availableG.map((x) => x.evidence2))
      .filter((x) => !evidence.includes(x));

    const mostFrequent = getEvidenceOccurances(availableEvidence);

    const prob = mostFrequent[0].probability;
    const mostProb = mostFrequent.filter((x) => x.probability === prob);

    if (mostProb.length > 1) {
      const cards = mostProb.map((x) => getEvidenceCardByType(x.type));
      tips.push({
        text: `Most frequent evidence among possible ghosts: ${cards
          .map((x) => x.name)
          .join(', ')}`,
      });
    } else {
      tips.push({
        icon: getEvidenceCardByType(mostFrequent[0].type).icon,
        text: `Most frequent evidence among possible ghosts: ${
          getEvidenceCardByType(mostFrequent[0].type).name
        } (${mostFrequent[0].probability}%)`,
      });
    }
  }

  return tips;
};
