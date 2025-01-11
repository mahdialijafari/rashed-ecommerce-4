import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#BF7C63', // Warm coral accent
        contrastText: '#F2F2F2', // Light text for buttons, etc.
      },
      secondary: {
        main: '#594A3E', // Rich brown for secondary accents
        contrastText: '#F2F2F2', // Light text
      },
      background: {
        default: '#F2F2F2', // Soft neutral background
        paper: '#FFFFFF', // Clean white for cards, dialogs
      },
      text: {
        primary: '#0D0B0C', // Deep black for high readability
        secondary: '#594A3E', // Subtle brown for secondary text
      },
      divider: '#D9D0C7', // Subtle, muted dividers
    },
    typography: {
      fontFamily: "'Roboto', 'Arial', sans-serif",
    },
  });
  
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#BF7C63', // Warm coral accent
        contrastText: '#0D0B0C', // Dark text for contrast
      },
      secondary: {
        main: '#D9D0C7', // Muted beige for secondary accents
        contrastText: '#0D0B0C', // Dark text
      },
      background: {
        default: '#0D0B0C', // Deep black background
        paper: '#594A3E', // Rich brown paper
      },
      text: {
        primary: '#F2F2F2', // Soft white for readability
        secondary: '#D9D0C7', // Muted beige for secondary text
      },
      divider: '#594A3E', // Rich brown dividers
    },
    typography: {
      fontFamily: "'Roboto', 'Arial', sans-serif",
    },
  });
  
  

export { lightTheme, darkTheme };
