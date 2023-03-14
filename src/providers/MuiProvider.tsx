import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#68b36b",
      main: "#43a047",
      dark: "#2e7031",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ffcf33",
      main: "#ffc400",
      dark: "#b28900",
      contrastText: "#1F2937",
    },
  },
  typography: {
    h1: {
      fontSize: 28,
      fontWeight: "bold",
    },
    h2: {
      fontSize: 24,
      fontWeight: "bold",
    },
    h3: {
      fontSize: 20,
      fontWeight: "bold",
    },
    subtitle1: {
      fontSize: 14,
      fontWeight: "600",
      color: "GrayText",
    },
    subtitle2: {
      fontSize: 12,
      fontWeight: "500",
      color: "GrayText",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
        color: "primary",
      },
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...{
            borderRadius: 4,
            textTransform: "unset",
            fontSize: "1rem",
            fontWeight: 600,
            lineHeight: "1.5rem",
          },
          ...(ownerState.variant === "contained" && {
            boxShadow: "unset",
          }),
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {},
    },
  },
});

interface Props {
  children: React.ReactNode;
}

function MuiProvider({ children }: Props) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export { MuiProvider };
