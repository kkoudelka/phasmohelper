import { EvidenceType } from './evidence';

export interface IGhost {
  name: string;
  evidence: IEvidence;
  evidence2?: EvidenceType[];
}

export interface IEvidence {
  emf: boolean;
  fingerprints: boolean;
  freezing: boolean;
  orbs: boolean;
  writing: boolean;
  spiritbox: boolean;
}

const banshee: IGhost = {
  name: 'Banshee',
  evidence2: ['emf', 'fingerprints', 'freezing'],
  evidence: {
    emf: true,
    fingerprints: true,
    freezing: true,
    orbs: false,
    writing: false,
    spiritbox: false,
  },
};

const demon: IGhost = {
  name: 'Demon',
  evidence2: ['freezing', 'writing', 'spiritbox'],
  evidence: {
    emf: false,
    fingerprints: false,
    freezing: true,
    orbs: false,
    writing: true,
    spiritbox: true,
  },
};

const jinn: IGhost = {
  name: 'Jinn',
  evidence2: ['emf', 'orbs', 'spiritbox'],
  evidence: {
    emf: true,
    fingerprints: false,
    freezing: false,
    orbs: true,
    writing: false,
    spiritbox: true,
  },
};

const mare: IGhost = {
  name: 'Mare',
  evidence2: ['freezing', 'orbs', 'spiritbox'],
  evidence: {
    emf: false,
    fingerprints: false,
    freezing: true,
    orbs: true,
    writing: false,
    spiritbox: true,
  },
};

const oni: IGhost = {
  name: 'Oni',
  evidence2: ['emf', 'writing', 'spiritbox'],
  evidence: {
    emf: true,
    fingerprints: false,
    freezing: false,
    orbs: false,
    writing: true,
    spiritbox: true,
  },
};

const phantom: IGhost = {
  name: 'Phantom',
  evidence2: ['emf', 'freezing', 'orbs'],
  evidence: {
    emf: true,
    fingerprints: false,
    freezing: true,
    orbs: true,
    writing: false,
    spiritbox: false,
  },
};

const poltergeist: IGhost = {
  name: 'Poltergeist',
  evidence2: ['fingerprints', 'orbs', 'spiritbox'],
  evidence: {
    emf: false,
    fingerprints: true,
    freezing: false,
    orbs: true,
    writing: false,
    spiritbox: true,
  },
};

const revenant: IGhost = {
  name: 'Revenant',
  evidence2: ['emf', 'fingerprints', 'writing'],
  evidence: {
    emf: true,
    fingerprints: true,
    freezing: false,
    orbs: false,
    writing: true,
    spiritbox: false,
  },
};

const shade: IGhost = {
  name: 'Shade',
  evidence2: ['emf', 'orbs', 'writing'],
  evidence: {
    emf: true,
    fingerprints: false,
    freezing: false,
    orbs: true,
    writing: true,
    spiritbox: false,
  },
};

const spirit: IGhost = {
  name: 'Spirit',
  evidence2: ['fingerprints', 'writing', 'spiritbox'],
  evidence: {
    emf: false,
    fingerprints: true,
    freezing: false,
    orbs: false,
    writing: true,
    spiritbox: true,
  },
};

const wraith: IGhost = {
  name: 'Wraith',
  evidence2: ['fingerprints', 'freezing', 'spiritbox'],
  evidence: {
    emf: false,
    fingerprints: true,
    freezing: true,
    orbs: false,
    writing: false,
    spiritbox: true,
  },
};

const yurei: IGhost = {
  name: 'Yurei',
  evidence2: ['freezing', 'orbs', 'writing'],
  evidence: {
    emf: false,
    fingerprints: false,
    freezing: true,
    orbs: true,
    writing: true,
    spiritbox: false,
  },
};

export const ghosts = [
  banshee,
  demon,
  jinn,
  mare,
  oni,
  phantom,
  poltergeist,
  revenant,
  shade,
  spirit,
  wraith,
  yurei,
];
