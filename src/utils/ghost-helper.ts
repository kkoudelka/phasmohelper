import { ghosts, IEvidence, IGhost } from '../ghosts/ghosts';

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
  currentEvidence: IEvidence,
): boolean => {
  return getAvailableGhosts(currentEvidence).includes(ghost);
};
