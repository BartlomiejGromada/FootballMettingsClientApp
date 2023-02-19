import { Box, Step, StepButton, Stepper, Typography } from "@mui/material";
import React from "react";

const steps = ["Account data", "Personal informations"];

interface Props {
  activeFormIndex: number;
  setActiveFormIndex: React.Dispatch<React.SetStateAction<number>>;
  isAccountDataValid: boolean;
  isAccountDataDirty: boolean;
  isPersonalInfoValid: boolean;
  isPersonalInfoDirty: boolean;
}

function FormStepper(props: Props) {
  const {
    activeFormIndex,
    setActiveFormIndex,
    isAccountDataValid,
    isAccountDataDirty,
    isPersonalInfoValid,
    isPersonalInfoDirty,
  } = props;

  const changeStepHandler = (index: number) => {
    setActiveFormIndex(index);
  };

  const isStepValid = (step: number) => {
    if (step === 0) {
      return isAccountDataValid;
    }

    return isPersonalInfoValid;
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper nonLinear activeStep={activeFormIndex}>
        {steps.map((label, index) => {
          const labelProps: {
            optional?: React.ReactNode;
            error?: boolean;
          } = {};
          if (!isStepValid(index)) {
            labelProps.optional = (
              <Typography variant="caption" color="error">
                Invalid data
              </Typography>
            );
            labelProps.error;
          }

          return (
            <Step
              key={index}
              completed={
                index === 0
                  ? isAccountDataDirty && isAccountDataValid
                  : isPersonalInfoDirty && isPersonalInfoValid
              }
            >
              <StepButton
                color="inherit"
                onClick={() => changeStepHandler(index)}
                {...labelProps}
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
