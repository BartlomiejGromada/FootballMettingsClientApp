import { Logo } from "@components/ui/Logo";
import { LoginForm } from "@features/Login";
import { Grid } from "@mui/material";

function LoginPage() {
  return (
    <Grid
      container
      flexDirection="column"
      bgcolor="#fff"
      paddingY={4}
      paddingX={4}
      width="max-content"
      height="60%"
      borderRadius={2}
    >
      <Grid container paddingBottom={4} justifyContent="center">
        <Logo />
      </Grid>

      <LoginForm />
    </Grid>
  );
}

export { LoginPage };
