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
  components: {
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
