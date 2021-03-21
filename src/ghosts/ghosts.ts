import { EvidenceType } from './evidence';

export interface IGhost {
  name: string;
  evidence2: EvidenceType[];
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
};

const demon: IGhost = {
  name: 'Demon',
  evidence2: ['freezing', 'writing', 'spiritbox'],
};

const jinn: IGhost = {
  name: 'Jinn',
  evidence2: ['emf', 'orbs', 'spiritbox'],
};

const mare: IGhost = {
  name: 'Mare',
  evidence2: ['freezing', 'orbs', 'spiritbox'],
};

const oni: IGhost = {
  name: 'Oni',
  evidence2: ['emf', 'writing', 'spiritbox'],
};

const phantom: IGhost = {
  name: 'Phantom',
  evidence2: ['emf', 'freezing', 'orbs'],
};

const poltergeist: IGhost = {
  name: 'Poltergeist',
  evidence2: ['fingerprints', 'orbs', 'spiritbox'],
};

const revenant: IGhost = {
  name: 'Revenant',
  evidence2: ['emf', 'fingerprints', 'writing'],
};

const shade: IGhost = {
  name: 'Shade',
  evidence2: ['emf', 'orbs', 'writing'],
};

const spirit: IGhost = {
  name: 'Spirit',
  evidence2: ['fingerprints', 'writing', 'spiritbox'],
};

const wraith: IGhost = {
  name: 'Wraith',
  evidence2: ['fingerprints', 'freezing', 'spiritbox'],
};

const yurei: IGhost = {
  name: 'Yurei',
  evidence2: ['freezing', 'orbs', 'writing'],
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
