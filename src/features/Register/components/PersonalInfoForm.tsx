import { StyledTextField } from "@components/mui";
import { StyledDatePicker } from "@components/mui/StyledDatePicker";
import { Grid } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { RegisterUserFormProps } from "../types/RegisterUserFormProps";

function PersonalInfoForm() {
  const { control } = useFormContext<RegisterUserFormProps>();

  return (
    <Grid container flexDirection={"column"} gap={2}>
      <StyledTextField label="Nickname" name="nickname" required={true} />

      <StyledTextField label="Firstname" name="firstName" />
      <StyledTextField label="Lastname" name="lastName" />

      <Controller
        name="dateOfBirth"
        control={control}
        render={({ field: { onChange, value } }) => (
          <StyledDatePicker
            label="Birthday"
            value={value}
            onChange={onChange}
          />
        )}
      />
    </Grid>
  );
}

export { PersonalInfoForm };
