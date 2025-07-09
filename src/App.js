import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Fab, Box, useMediaQuery } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Link } from 'react-scroll';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [mode, setMode] = useState('dark');
  const isMobile = useMediaQuery('(max-width:960px)');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'dark'
            ? {
                primary: { main: '#3b82f6' },
                secondary: { main: '#f59e0b' },
                background: { default: '#1e293b', paper: '#2d3748' },
                text: { primary: '#e2e8f0', secondary: '#94a3b8' },
              }
            : {
                primary: { main: '#1e40af' },
                secondary: { main: '#d97706' },
                background: { default: '#f9fafb', paper: '#ffffff' },
                text: { primary: '#111827', secondary: '#4b5563' },
              }),
        },
      }),
    [mode],
  );

  const handleThemeToggle = () => {
    setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ErrorBoundary>
          <Box sx={{ minHeight: '100vh' }}>
            <Header onThemeToggle={handleThemeToggle} />
            <main>
              <Hero />
              <About />
              <Education />
              <Skills />
              <Experience />
              <Projects />
              <Achievements />
              <Contact />
            </main>
            <Footer />
            <Box sx={{ position: 'fixed', bottom: 24, right: 24, zIndex: 1000 }}>
              <Link to="home" spy={true} smooth={true} duration={500}>
                <Fab color="primary" size="medium" aria-label="scroll back to top">
                  <KeyboardArrowUpIcon />
                </Fab>
              </Link>
            </Box>
          </Box>
        </ErrorBoundary>
      </Router>
    </ThemeProvider>
  );
}

export default App;