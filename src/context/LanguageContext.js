import React, { useState, createContext } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = props => {
  const [language, setLanguage] = useState('french');

  return (
    <LanguageContext.Provider value={{language}}>
      {props.children}
    </LanguageContext.Provider>
  )
}