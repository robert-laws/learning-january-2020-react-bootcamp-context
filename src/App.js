import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import PageContent from './PageContent';
import Navbar from './Navbar';
import Form from './Form';

import CssBaseline from '@material-ui/core/CssBaseline';

import './App.scss';

const App = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PageContent>
          <CssBaseline />
          <Navbar />
          <Form />
        </PageContent>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
