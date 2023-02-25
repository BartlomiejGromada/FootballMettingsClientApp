import { SnackbarProvider as Provider } from "notistack";

interface SnackbarProviderProps {
  children: React.ReactNode;
}

function SnackbarProvider({ children }: SnackbarProviderProps) {
  return (
    <Provider
      maxSnack={3}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
    >
      {children}
    </Provider>
  );
}

export { SnackbarProvider };
