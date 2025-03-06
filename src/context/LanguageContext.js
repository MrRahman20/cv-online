import React, { createContext } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  return (
    <LanguageContext.Provider value={{}}>
      {children}
    </LanguageContext.Provider>
  );
};
