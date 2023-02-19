import { EmailTextField, PasswordTextField } from "@components/mui";
import { Grid } from "@mui/material";

function AccountDataForm() {
  return (
    <Grid container flexDirection={"column"} gap={2}>
      <EmailTextField />

      <PasswordTextField />

      <PasswordTextField label="Confirm password" name="confirmPassword" />
    </Grid>
  );
}

export { AccountDataForm };
