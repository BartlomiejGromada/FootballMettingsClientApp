import { EmailTextField, PasswordTextField } from "@components/mui";
import { Grid } from "@mui/material";

function AccountDataForm() {
  return (
    <Grid container flexDirection={"column"} gap={2}>
      <EmailTextField />

      <PasswordTextField />

      <PasswordTextField
        label="Repeat password"
        id="repeat_password"
        ariaLabelIconVisibility="toggle password visibility"
      />
    </Grid>
  );
}

export { AccountDataForm };
