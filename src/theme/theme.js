import { createTheme } from "@mui/material/styles";

const lightTheme = {
  primary: {
    main: "#1976d2",
  },
  secondary: {
    main: "#f50057",
  },
  background: {
    default: "#ffffff",
    paper: "#ffffff",
  },
  text: {
    primary: "rgba(0, 0, 0, 0.87)",
    secondary: "rgba(0, 0, 0, 0.6)",
  },
};

const darkTheme = {
  primary: {
    main: "#90caf9",
  },
  secondary: {
    main: "#f06292",
  },
  background: {
    default: "#121212",
    paper: "#1e1e1e",
  },
  text: {
    primary: "#ffffff",
    secondary: "rgba(255, 255, 255, 0.7)",
  },
};

const commonThemeSettings = {
  typography: {
    h1: {
      fontWeight: 500,
      fontSize: "2.5rem",
      "@media (min-width:600px)": {
        fontSize: "3.5rem",
      },
    },
    h2: {
      fontWeight: 500,
      fontSize: "2rem",
      "@media (min-width:600px)": {
        fontSize: "2.25rem",
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
};

export const createAppTheme = (mode) => {
  return createTheme({
    palette: {
      mode,
      ...(mode === "light" ? lightTheme : darkTheme),
    },
    ...commonThemeSettings,
  });
};
