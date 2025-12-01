import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';

type ConsentContextType = {
  userHasConsented: boolean;
  setUserConsent: (consented: boolean) => void;
};

// 1. Create the Context
const ConsentContext = createContext<ConsentContextType | undefined>(undefined);

// 2. Create the Provider Component
export const ConsentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userHasConsented, setUserHasConsented] = useState(false);

  // Function to set consent, typically called by a ConsentBanner component
  const setUserConsent = useCallback((consented: boolean) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('userConsent', consented ? 'true' : 'false');
    }
    setUserHasConsented(consented);
  }, []);

  // Effect to read initial consent state from storage on client load
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedConsent = localStorage.getItem('userConsent');
      if (storedConsent === 'true') {
        setUserHasConsented(true);
      }
    }
  }, []);

  const value = { userHasConsented, setUserConsent };

  return (
    <ConsentContext.Provider value={value}>
      {children}
    </ConsentContext.Provider>
  );
};

// 3. Create the Custom Hook for Consumption
export const useConsent = (): ConsentContextType => {
  const context = useContext(ConsentContext);
  if (context === undefined) {
    throw new Error('useConsent must be used within a ConsentProvider');
  }
  return context;
};