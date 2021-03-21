import { EvidenceType } from '../ghosts/evidence';
import { ghosts, IEvidence, IGhost } from '../ghosts/ghosts';

export const getAvailableGhosts2 = (
  currentEvidence: EvidenceType[],
): IGhost[] => {
  if (!currentEvidence.length) return ghosts;
  if (currentEvidence.length > 3) return [];

  let availableGhosts: IGhost[] = ghosts;

  currentEvidence.forEach((evidence) => {
    availableGhosts = availableGhosts.filter((g) =>
      g.evidence2?.includes(evidence),
    );
  });

  return availableGhosts;
};

export const isGhostAvailable = (
  ghost: IGhost,
  currentEvidence: EvidenceType[],
): boolean => {
  return getAvailableGhosts2(currentEvidence).includes(ghost);
};
