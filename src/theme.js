import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: { 
      fontWeight: 800, 
      fontSize: '4rem', 
      lineHeight: 1.2, 
      letterSpacing: '-0.02em',
      '@media (max-width:900px)': { fontSize: '3rem' },
      '@media (max-width:600px)': { fontSize: '2.5rem' }
    },
    h2: { 
      fontWeight: 700, 
      fontSize: '3rem', 
      lineHeight: 1.3, 
      letterSpacing: '-0.015em',
      '@media (max-width:900px)': { fontSize: '2.5rem' },
      '@media (max-width:600px)': { fontSize: '2rem' }
    },
    h3: { 
      fontWeight: 600, 
      fontSize: '2.25rem', 
      lineHeight: 1.4,
      '@media (max-width:600px)': { fontSize: '1.75rem' }
    },
    h4: { 
      fontWeight: 600, 
      fontSize: '1.75rem', 
      lineHeight: 1.4,
      '@media (max-width:600px)': { fontSize: '1.5rem' }
    },
    h5: { 
      fontWeight: 500, 
      fontSize: '1.5rem',
      '@media (max-width:600px)': { fontSize: '1.25rem' }
    },
    h6: { 
      fontWeight: 500, 
      fontSize: '1.25rem',
      '@media (max-width:600px)': { fontSize: '1.1rem' }
    },
    body1: { 
      fontSize: '1.1rem', 
      lineHeight: 1.7,
      '@media (max-width:600px)': { fontSize: '1rem' }
    },
    body2: { 
      fontSize: '0.95rem', 
      lineHeight: 1.6,
      '@media (max-width:600px)': { fontSize: '0.875rem' }
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          padding: '12px 28px',
          fontWeight: 600,
          fontSize: '1rem',
          boxShadow: '0 3px 10px rgba(0,0,0,0.2)',
          transition: 'all 0.3s ease',
          '&:hover': { 
            boxShadow: '0 6px 16px rgba(0,0,0,0.3)', 
            transform: 'translateY(-2px)' 
          },
        },
        contained: { 
          background: 'linear-gradient(45deg, #3b82f6 30%, #60a5fa 90%)',
          '&:hover': {
            background: 'linear-gradient(45deg, #3b82f6 40%, #60a5fa 100%)',
          }
        },
        outlined: { 
          borderWidth: 2, 
          '&:hover': { 
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            borderWidth: 2
          } 
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': { 
            transform: 'translateY(-8px)', 
            boxShadow: '0 8px 24px rgba(0,0,0,0.3)' 
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { 
          borderRadius: 12, 
          boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
          transition: 'all 0.3s ease'
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          fontWeight: 500,
          padding: '4px 8px',
          transition: 'all 0.3s ease',
          '&:hover': { 
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: { 
        root: { 
          borderRadius: 0, 
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(30, 41, 59, 0.8)'
        } 
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          transition: 'all 0.3s ease',
          '&:hover': { 
            boxShadow: '0 6px 16px rgba(0,0,0,0.4)', 
            backgroundColor: 'primary.dark',
            transform: 'translateY(-3px)'
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'divider',
            },
            '&:hover fieldset': {
              borderColor: 'primary.main',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'primary.main',
              borderWidth: 2,
            },
          },
        },
      },
    },
  },
  shape: {
    borderRadius: 12,
  },
});

export default theme;