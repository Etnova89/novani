import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import { Sun, Moon } from "lucide-react";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import HomePage from "./components/HomePage";
import ServicesPage from "./components/ServicesPage";
import { ThemeProvider, useColorMode } from "./theme/themeProvider";

const ThemeToggle = () => {
  const theme = useTheme();
  const { toggleColorMode } = useColorMode();

  return (
    <IconButton
      onClick={toggleColorMode}
      color="inherit"
      edge="end"
      aria-label="toggle theme"
      sx={{ ml: 2 }}
    >
      {theme.palette.mode === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </IconButton>
  );
};

const AppContent = () => {
  const theme = useTheme();

  return (
    <Router>
      <Box
        sx={{
          flexGrow: 1,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          bgcolor: "background.default",
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
                color: theme.palette.primary.light,
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
            bgcolor: "background.paper",
            color: "text.secondary",
            p: 3,
            mt: "auto",
          }}
        >
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} Novani Therapy & Wellness PLLC. 
              <br />All rights reserved
          </Typography>
        </Box>
      </Box>
    </Router>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <CssBaseline />
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
