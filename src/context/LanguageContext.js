import React, { useState, createContext } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = props => {
  const [language, setLanguage] = useState('french');

  const changeLanguage = event => {
    setLanguage(event.target.value)
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  )
}

export const withLanguageContext = Component => props => (
  <LanguageContext.Consumer>
    {value => (
      <Component languageContext={value} {...props} />
    )}
  </LanguageContext.Consumer>
)