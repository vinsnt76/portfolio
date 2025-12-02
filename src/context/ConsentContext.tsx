import React, { createContext, useContext, useState, ReactNode } from 'react';

export type ConsentContextType = {
  userHasConsented: boolean;
  setUserHasConsented: (value: boolean) => void;
};

const ConsentContext = createContext<ConsentContextType | undefined>(undefined);

export const ConsentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userHasConsented, setUserHasConsented] = useState(false);

  return (
    <ConsentContext.Provider value={{ userHasConsented, setUserHasConsented }}>
      {children}
    </ConsentContext.Provider>
  );
};

export const useConsent = (): ConsentContextType => {
  const context = useContext(ConsentContext);
  if (!context) {
    throw new Error('useConsent must be used within ConsentProvider');
  }
  return context;
};