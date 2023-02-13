import { Box, Step, StepButton, Stepper, Typography } from "@mui/material";
import React from "react";

const steps = ["Account data", "Personal informations"];

interface Props {
  activeFormIndex: number;
  setActiveFormIndex: React.Dispatch<React.SetStateAction<number>>;
  isAccountDataValid: boolean;
  isPersonalInfoValid: boolean;
}

function FormStepper(props: Props) {
  const {
    activeFormIndex,
    setActiveFormIndex,
    isAccountDataValid,
    isPersonalInfoValid,
  } = props;

  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean;
  }>({});

  const changeStepHandler = (index: number) => {
    setActiveFormIndex(index);
  };

  const isStepFailed = (step: number) => {
    return false;
    //return step === 1;
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper nonLinear activeStep={activeFormIndex}>
        {steps.map((label, index) => {
          const labelProps: {
            optional?: React.ReactNode;
            error?: boolean;
          } = {};
          if (isStepFailed(index)) {
            labelProps.optional = (
              <Typography variant="caption" color="error">
                Alert message
              </Typography>
            );
            labelProps.error = true;
          }

          return (
            <Step
              key={index}
              completed={index === 0 ? isAccountDataValid : isPersonalInfoValid}
            >
              <StepButton
                color="inherit"
                onClick={() => changeStepHandler(index)}
              >
                {label}
              </StepButton>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
}

export { FormStepper };
