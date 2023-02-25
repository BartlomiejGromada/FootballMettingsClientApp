import { Logo } from "@components/ui/Logo";
import { RegisterForm } from "@features/Register";
import { Grid } from "@mui/material";

export function RegisterPage() {
  return (
    <Grid
      container
      flexDirection="column"
      bgcolor="#fff"
      paddingTop={4}
      paddingX={4}
      width="max-content"
      height="80%"
      borderRadius={2}
    >
      <Grid container paddingBottom={4} justifyContent="center">
        <Logo />
      </Grid>

      <RegisterForm />
    </Grid>
  );
}
