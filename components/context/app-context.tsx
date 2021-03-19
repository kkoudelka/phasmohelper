import React, { createContext, useState } from 'react';
import { IEvidence } from '../../src/ghosts/ghosts';

export interface IAppContextVals {
  currentEvidence: IEvidence;
  setCurrentEvidence: (evidence: IEvidence) => void;
}

const defaults: IAppContextVals = {
  currentEvidence: {
    emf: false,
    spiritbox: false,
    writing: false,
    orbs: false,
    freezing: false,
    fingerprints: false,
  },
  setCurrentEvidence: null,
};

export const AppContext = createContext<IAppContextVals>(defaults);

const AppContextProvider: React.FC<{} | IAppContextVals> = ({ children }) => {
  const [currentEvidence, setCurrentEvidence] = useState(
    defaults.currentEvidence,
  );

  return (
    <AppContext.Provider value={{ currentEvidence, setCurrentEvidence }}>
      {children}
    </AppContext.Provider>
  );
};

export const AContext = {
  Provider: AppContextProvider,
  Consumer: AppContext,
};
