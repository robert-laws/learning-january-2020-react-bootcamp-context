import React, { useState, createContext } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = props => {
  const [ isDarkMode, setIsDarkMode ] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )
}