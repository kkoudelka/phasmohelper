import { EvidenceType } from '../ghosts/evidence';
import { ghosts, IEvidence, IGhost } from '../ghosts/ghosts';

export const isEvidenceAvailable = (
  type: EvidenceType,
  currentEvidence: IEvidence,
): boolean => {
  const ghosts = getAvailableGhosts(currentEvidence);
  const res = ghosts.some((x) => x.evidence[type] === true);
  return res;
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
