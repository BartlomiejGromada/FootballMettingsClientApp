import { EmailTextField, PasswordTextField } from "@components/mui";
import { Button, Grid } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function RegisterForm() {
  return (
    <Grid container direction="column" gap={2} minWidth={340}>
      <EmailTextField />

      <PasswordTextField />

      <PasswordTextField
        label="Repeat password"
        id="repeat_password"
        ariaLabelIconVisibility="toggle password visibility"
      />

      <Button variant="contained" endIcon={<SendIcon />}>
        Register
      </Button>
    </Grid>
  );
}

export { RegisterForm };
