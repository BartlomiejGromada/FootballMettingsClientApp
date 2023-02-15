import SendIcon from "@mui/icons-material/Send";
import { Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AccountDataForm } from "./AccountDataForm";
import { FormStepper } from "./FormStepper";
import { PersonalInfoForm } from "./PersonalInfoForm";

function RegisterForm() {
  const [activeFormIndex, setActiveFormIndex] = useState(0);
  const [isAccountDataValid, setIsAccountDataValid] = useState(false);
  const [isPersonalInfoValid, setIsPersonalInfoValid] = useState(false);

  const navigate = useNavigate();

  return (
    <Grid container direction="column" minWidth={340} height="80%">
      <Grid container direction="column" flex={9} rowGap={4}>
        <FormStepper
          activeFormIndex={activeFormIndex}
          setActiveFormIndex={setActiveFormIndex}
          isAccountDataValid={isAccountDataValid}
          isPersonalInfoValid={isPersonalInfoValid}
        />

        {activeFormIndex === 0 && <AccountDataForm />}
        {activeFormIndex === 1 && <PersonalInfoForm />}
      </Grid>

      <Grid container direction="column" flex={"0.5"}>
        <Button variant="contained" endIcon={<SendIcon />}>
          Register
        </Button>

        <Grid
          container
          alignItems="flex-end"
          justifyContent="center"
          columnGap={1}
          marginTop={2}
        >
          <Typography>Already have account?</Typography>
          <Typography
            component="a"
            color="primary.light"
            sx={{
              cursor: "pointer",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
            onClick={() => navigate("/login")}
          >
            Login
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export { RegisterForm };
