import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFD700',
      light: '#FFED4E',
      dark: '#F4C430',
    },
    secondary: {
      main: '#ffffff',
    },
    background: {
      default: '#000000',
      paper: '#1a1a1a',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.95)',
    },
  },
  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif',
    h1: {
      fontFamily: '"Playfair Display", "Libre Baskerville", Georgia, "Times New Roman", Times, serif',
      fontWeight: 700,
      letterSpacing: '0.02em',
    },
    h2: {
      fontFamily: '"Playfair Display", "Libre Baskerville", Georgia, "Times New Roman", Times, serif',
      fontWeight: 700,
      letterSpacing: '0.02em',
    },
    h3: {
      fontFamily: '"Playfair Display", "Libre Baskerville", Georgia, "Times New Roman", Times, serif',
      fontWeight: 600,
      letterSpacing: '0.01em',
    },
    h4: {
      fontFamily: '"Playfair Display", "Libre Baskerville", Georgia, "Times New Roman", Times, serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Playfair Display", "Libre Baskerville", Georgia, "Times New Roman", Times, serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Playfair Display", "Libre Baskerville", Georgia, "Times New Roman", Times, serif',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '999px',
          textTransform: 'none',
          fontWeight: 700,
          fontSize: '16px',
          padding: '14px 32px',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #FFD700 0%, #F4C430 100%)',
          color: '#000000',
          boxShadow: '0 8px 20px rgba(255, 215, 0, 0.6)',
          '&:hover': {
            background: 'linear-gradient(135deg, #FFED4E 0%, #FFD700 100%)',
            boxShadow: '0 12px 32px rgba(255, 215, 0, 0.9)',
            transform: 'translateY(-2px)',
          },
        },
        outlinedSecondary: {
          borderColor: 'rgba(255, 255, 255, 0.4)',
          color: '#ffffff',
          borderWidth: '2px',
          '&:hover': {
            borderColor: '#FFD700',
            background: 'rgba(255, 215, 0, 0.1)',
            borderWidth: '2px',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
})

export default theme

