import { StyledTextField } from "@components/mui";
import { Grid, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

function PersonalInfoForm() {
  return (
    <Grid container flexDirection={"column"} gap={2}>
      <StyledTextField label="Firstname" id="first_name" required={true} />
      <StyledTextField label="Lastname" id="last_name" required={true} />

      <StyledTextField label="Nickname" id="nick_name" required={true} />

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Birthday"
          inputFormat="dd.MM.yyyy"
          value={null}
          onChange={() => {}}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </Grid>
  );
}

export { PersonalInfoForm };
