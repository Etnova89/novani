import { createTheme } from "@mui/material/styles";

// Calming color palette for light theme
const lightTheme = {
  primary: {
    main: "#2B6777", //  green
    light: "#C8D8E4",
    dark: "#2B6777",
    contrastText: "#ffffff",
  },
  secondary: {
    main: "#52ab98", // coral
    light: "#2B6777", //soft sage
    dark: "#C5A497",
    contrastText: "#000000",
  },
  background: {
    default: "#F9F7F7", // Soft white
    paper: "#ffffff",
  },
  text: {
    primary: "#2C3639", // Deep gray-blue
    secondary: "rgba(44, 54, 57, 0.7)",
  },
  // Additional custom colors for specific uses
  custom: {
    accent1: "#DBE2E7", // Soft blue-gray
    accent2: "#DED0B6", // Warm beige
    accent3: "#BBCEC2", // Sage accent
  },
};

// Dark theme palette - complementary to light theme
const darkTheme = {
  primary: {
    main: "#33658A", // Lighter sage
    light: "#B5C9C5",
    dark: "#708B87",
    contrastText: "#ffffff",
  },
  secondary: {
    main: "#33658A", // Softer coral
    light: "#E6D1C7",
    dark: "#B29488",
    contrastText: "#000000",
  },
  background: {
    default: "#2C3639", // Deep gray-blue
    paper: "#3F4B4F",
  },
  text: {
    primary: "#F9F7F7",
    secondary: "rgba(249, 247, 247, 0.7)",
  },
  custom: {
    accent1: "#8FA3B0", // Darker blue-gray
    accent2: "#C5B7A0", // Darker beige
    accent3: "#9FB5AA", // Darker sage
  },
};

// Common theme settings
const commonThemeSettings = {
  typography: {
    fontFamily:
      '"Palatino Linotype", "Palatino", "Book Antiqua", "Georgia", serif',
    h1: {
      fontWeight: 500,
      fontSize: "2.5rem",
      "@media (min-width:600px)": {
        fontSize: "3.5rem",
      },
      letterSpacing: "-0.01562em",
      color: lightTheme.text.primary,
    },
    h2: {
      fontWeight: 500,
      fontSize: "2rem",
      "@media (min-width:600px)": {
        fontSize: "2.25rem",
      },
      letterSpacing: "-0.00833em",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.7,
      letterSpacing: "0.00938em",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          padding: "8px 24px",
          fontWeight: 500,
        },
        containedPrimary: {
          "&:hover": {
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 2px 12px rgba(0, 0, 0, 0.08)",
        },
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
};

// Theme creator function
export const createAppTheme = (mode) => {
  const themeColors = mode === "light" ? lightTheme : darkTheme;

  return createTheme({
    palette: {
      mode,
      ...themeColors,
    },
    ...commonThemeSettings,
  });
};
