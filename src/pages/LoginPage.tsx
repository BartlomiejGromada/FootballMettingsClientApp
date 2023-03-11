import { Logo } from "@components/ui";
import { LoginForm } from "@features/Login";
import { Grid } from "@mui/material";

function LoginPage() {
  return (
    <Grid
      container
      flexDirection="column"
      flexWrap="wrap"
      bgcolor="#fff"
      paddingY={4}
      paddingX={4}
      width="max-content"
      height="60%"
      borderRadius={2}
      overflow="auto"
    >
      <Grid container paddingBottom={4} justifyContent="center" flex={1}>
        <Logo />
      </Grid>

      <LoginForm />
    </Grid>
  );
}

export { LoginPage };
