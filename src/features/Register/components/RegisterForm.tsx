import { EmailTextField, PasswordTextField } from "@components/mui";
import { Button, Grid, Step } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { FormStepper } from "./FormStepper";
import { AccountDataForm } from "./AccountDataForm";
import { useState } from "react";
import { PersonalInfoForm } from "./PersonalInfoForm";

function RegisterForm() {
  const [activeFormIndex, setActiveFormIndex] = useState(0);
  const [isAccountDataValid, setIsAccountDataValid] = useState(false);
  const [isPersonalInfoValid, setIsPersonalInfoValid] = useState(false);

  return (
    <Grid container direction="column" gap={4} minWidth={340}>
      <FormStepper
        activeFormIndex={activeFormIndex}
        setActiveFormIndex={setActiveFormIndex}
        isAccountDataValid={isAccountDataValid}
        isPersonalInfoValid={isPersonalInfoValid}
      />

      {activeFormIndex === 0 && <AccountDataForm />}
      {activeFormIndex === 1 && <PersonalInfoForm />}

      <Button variant="contained" endIcon={<SendIcon />}>
        Register
      </Button>
    </Grid>
  );
}

export { RegisterForm };
