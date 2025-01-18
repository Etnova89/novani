import { useTheme as useMUITheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

export const useAppTheme = () => {
  const theme = useMUITheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  return {
    theme,
    isMobile,
    isTablet,
  };
};
