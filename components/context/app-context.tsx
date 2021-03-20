import React, { createContext, useState } from 'react';
import { firestore } from '../../src/fbase/fbase';
import { IEvidence } from '../../src/ghosts/ghosts';

export interface IAppContextVals {
  currentEvidence: IEvidence;
  setCurrentEvidence: (evidence: IEvidence) => void;
  changeEvidence: (evidence: IEvidence) => Promise<void>;
  setSessionDetails: (sessionDetails: ISession) => void;
  sessionDetails: ISession;
}

interface ISession {
  sessionDocId: string;
  sessionFriendlyId: string;
}

export interface ISessionDoc {
  sessionID: string;
  evidence: IEvidence;
  ghostName?: string;
}

export const defaults: IAppContextVals = {
  currentEvidence: {
    emf: false,
    spiritbox: false,
    writing: false,
    orbs: false,
    freezing: false,
    fingerprints: false,
  },
  setCurrentEvidence: null,
  changeEvidence: null,
  setSessionDetails: null,
  sessionDetails: null,
};

export const AppContext = createContext<IAppContextVals>(defaults);

const AppContextProvider: React.FC<{} | IAppContextVals> = ({ children }) => {
  const [currentEvidence, setCurrentEvidence] = useState(
    defaults.currentEvidence,
  );

  const [sessionDetails, setSessionDetails] = useState<ISession>(null);

  const changeEvidence = async (evidence: IEvidence) => {
    if (sessionDetails) {
      const doc = firestore
        .collection('sessions')
        .doc(sessionDetails.sessionDocId);
      await doc.update({ evidence });
    }
    setCurrentEvidence(evidence);
  };

  return (
    <AppContext.Provider
      value={{
        currentEvidence,
        setCurrentEvidence,
        changeEvidence,
        sessionDetails,
        setSessionDetails,
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
