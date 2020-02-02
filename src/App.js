import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import PageContent from './PageContent';
import Navbar from './Navbar';
import Form from './Form';

import CssBaseline from '@material-ui/core/CssBaseline';

import './App.scss';

function App() {
  return (
    <ThemeProvider>
      <PageContent>
        <CssBaseline />
        <Navbar />
        <Form />
      </PageContent>
    </ThemeProvider>
  );
}

export default App;
