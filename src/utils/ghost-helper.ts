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

export const getAvailableGhosts = (currentEvidence: IEvidence): IGhost[] => {
  let availableGhosts = ghosts;

  if (currentEvidence.emf) {
    availableGhosts = availableGhosts.filter(
      (ghost) => ghost.evidence.emf === true,
    );
  }
  if (currentEvidence.fingerprints) {
    availableGhosts = availableGhosts.filter(
      (ghost) => ghost.evidence.fingerprints === true,
    );
  }
  if (currentEvidence.freezing) {
    availableGhosts = availableGhosts.filter(
      (ghost) => ghost.evidence.freezing === true,
    );
  }
  if (currentEvidence.orbs) {
    availableGhosts = availableGhosts.filter(
      (ghost) => ghost.evidence.orbs === true,
    );
  }
  if (currentEvidence.spiritbox) {
    availableGhosts = availableGhosts.filter(
      (ghost) => ghost.evidence.spiritbox === true,
    );
  }
  if (currentEvidence.writing) {
    availableGhosts = availableGhosts.filter(
      (ghost) => ghost.evidence.writing === true,
    );
  }

  return availableGhosts;
};

export const isGhostAvailable = (
  ghost: IGhost,
  currentEvidence: EvidenceType[],
): boolean => {
  return getAvailableGhosts2(currentEvidence).includes(ghost);
};
