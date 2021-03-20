import React, { createContext, useState } from 'react';
import { firestore } from '../../src/fbase/fbase';
import { EvidenceType } from '../../src/ghosts/evidence';
import { IEvidence } from '../../src/ghosts/ghosts';
import { ObjectiveType } from '../../src/ghosts/objectives';
import { isEvidenceAvailable } from '../../src/utils/evidence-helper';

export interface IAppContextVals {
  changeEvidence: (evidence: EvidenceType) => Promise<void>;
  setSessionDetails: (sessionDetails: ISession) => void;
  sessionDetails: ISession;
  setMission: (mission: IMission) => void;
  mission: IMission;
  changeName: (name: string) => Promise<void>;
  changeObjectives: (objectives: ObjectiveType[]) => Promise<void>;
}

export interface IMission {
  evidence: EvidenceType[];
  objectives: ObjectiveType[];
  ghostName: string;
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
  },
  setMission: null,
  changeName: null,
  changeObjectives: null,
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
      await doc.update({ mission });
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
