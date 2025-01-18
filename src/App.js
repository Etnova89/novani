import React, { createContext, useContext, useState, useMemo } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  useTheme,
} from '@mui/material/styles';
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { Sun, Moon } from 'lucide-react';
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import HomePage from "./components/HomePage";
import ServicesPage from "./components/ServicesPage";

// Create theme context
const ColorModeContext = createContext({ toggleColorMode: () => {} });

// Theme toggle button component
const ThemeToggle = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <IconButton
      onClick={colorMode.toggleColorMode}
      color="inherit"
      edge="end"
      aria-label="toggle theme"
      sx={{ ml: 2 }}
    >
      {theme.palette.mode === 'dark' ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </IconButton>
  );
};

const App = () => {
  // Use system preference as default
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState(prefersDarkMode ? 'dark' : 'light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === 'light' ? '#1976d2' : '#90caf9',
          },
          secondary: {
            main: '#f50057', // Your secondary color
          },
          background: {
            default: mode === 'light' ? '#ffffff' : '#121212',
            paper: mode === 'light' ? '#ffffff' : '#1e1e1e',
          },
          text: {
            primary: mode === 'light' ? 'rgba(0, 0, 0, 0.87)' : '#ffffff',
            secondary: mode === 'light' ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.7)',
          },
        },
        typography: {
          h1: {
            fontWeight: 500,
            // Add any custom typography styles
          },
          h2: {
            fontWeight: 500,
            fontSize: '2.25rem',
          },
          // Add other typography variants as needed
        },
        // Add any other theme customizations
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Box
            sx={{
              flexGrow: 1,
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <AppBar position="static" elevation={0}>
              <Toolbar>
                <Typography
                  variant="h6"
                  component={Link}
                  to="/"
                  sx={{
                    flexGrow: 1,
                    fontWeight: "bold",
                    color: theme.palette.primary.main,
                    textDecoration: "none",
                    "&:hover": {
                      textDecoration: "none",
                    },
                  }}
                >
                  NOVANI THERAPY
                </Typography>
                <Button color="inherit" component={Link} to="/">
                  Home
                </Button>
                <Button color="inherit" component={Link} to="/services">
                  Services
                </Button>
                <Button color="inherit" component={Link} to="/about">
                  About
                </Button>
                <Button color="inherit" component={Link} to="/contact">
                  Contact
                </Button>
                <ThemeToggle />
              </Toolbar>
            </AppBar>

            <Routes>
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
            </Routes>

            <Box
              component="footer"
              sx={{
                bgcolor: 'background.paper',
                color: 'text.secondary',
                p: 3,
                mt: "auto",
              }}
            >
              <Typography variant="body2" align="center">
                © {new Date().getFullYear()} Novani Therapy. All rights reserved.
              </Typography>
            </Box>
          </Box>
        </Router>
      </MUIThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;