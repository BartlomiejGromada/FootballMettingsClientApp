import { TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

interface Props {
  label: string;
  value?: Date;
  onChange: (...event: any[]) => void;
}

const StyledDatePicker = (props: Props) => {
  const { label, value, onChange } = props;
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label={label}
        inputFormat="dd.MM.yyyy"
        value={value ?? null}
        onChange={onChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export { StyledDatePicker };
