import React, { createContext, useState } from 'react';
import { firestore } from '../../src/fbase/fbase';
import { EvidenceType } from '../../src/ghosts/evidence';
import { IEvidence } from '../../src/ghosts/ghosts';
import { ObjectiveType } from '../../src/ghosts/objectives';
import {
  DifficultyType,
  isEvidenceAvailable,
} from '../../src/utils/evidence-helper';
import { SongType } from '../../src/utils/song-helper';

export interface IAppContextVals {
  changeEvidence: (evidence: EvidenceType) => Promise<void>;
  setSessionDetails: (sessionDetails: ISession) => void;
  sessionDetails: ISession;
  setMission: (mission: IMission) => void;
  mission: IMission;
  changeName: (name: string) => Promise<void>;
  changeObjectives: (objectives: ObjectiveType[]) => Promise<void>;
  changeSong: (song: SongType) => Promise<void>;
  setHunting: (hunting: boolean) => Promise<void>;
  setDifficulty: (difficulty: DifficultyType) => Promise<void>;
}

export interface IMission {
  evidence: EvidenceType[];
  objectives: ObjectiveType[];
  ghostName: string;
  difficulty: DifficultyType;
  song: SongType;
  hunting: boolean;
}

interface ISession {
  sessionDocId: string;
  sessionFriendlyId: string;
}

export interface ISessionDoc {
  sessionID: string;
  mission: IMission;
  lastUpdate?: Date;
}

export const defaults: IAppContextVals = {
  changeEvidence: null,
  setSessionDetails: null,
  sessionDetails: null,
  mission: {
    evidence: [],
    objectives: ['ghost-type'],
    ghostName: '',
    difficulty: 'amateur',
    song: 'none',
    hunting: false,
  },
  setMission: null,
  changeName: null,
  changeObjectives: null,
  changeSong: null,
  setHunting: null,
  setDifficulty: null,
};

export const AppContext = createContext<IAppContextVals>(defaults);

const AppContextProvider: React.FC<{} | IAppContextVals> = ({ children }) => {
  const [mission, setMission] = useState(defaults.mission);

  const [sessionDetails, setSessionDetails] = useState<ISession>(null);

  const handleChangeMission = async (mission: IMission) => {
    setMission(mission);

    if (sessionDetails) {
      const doc = firestore
        .collection('sessions')
        .doc(sessionDetails.sessionDocId);
      await doc.update({ mission, lastUpdate: new Date() });
    }
  };

  const changeEvidence = async (evidence: EvidenceType) => {
    if (!isEvidenceAvailable(evidence, mission.evidence)) return;
    const m: IMission = mission.evidence.includes(evidence)
      ? {
          ...mission,
          evidence: mission.evidence.filter((x) => x !== evidence),
        }
      : {
          ...mission,
          evidence: [...mission.evidence, evidence],
        };

    await handleChangeMission(m);
  };

  const changeName = async (name: string) => {
    if (name === mission.ghostName) return;

    await handleChangeMission({ ...mission, ghostName: name });
  };

  const changeObjectives = async (objectives: ObjectiveType[]) => {
    await handleChangeMission({ ...mission, objectives });
  };

  const changeSong = async (song: SongType) => {
    await handleChangeMission({ ...mission, song });
  };

  const setHunting = async (hunting: boolean) => {
    await handleChangeMission({ ...mission, hunting });
  };

  const setDifficulty = async (difficulty: DifficultyType) => {
    await handleChangeMission({ ...mission, difficulty });
  };

  return (
    <AppContext.Provider
      value={{
        changeEvidence,
        sessionDetails,
        setSessionDetails,
        mission,
        setMission,
        changeName,
        changeObjectives,
        changeSong,
        setHunting,
        setDifficulty,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const AContext = {
  Provider: AppContextProvider,
  Consumer: AppContext,
};
