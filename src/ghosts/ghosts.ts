export interface IGhost {
  name: string;
  evidence: IEvidence;
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
