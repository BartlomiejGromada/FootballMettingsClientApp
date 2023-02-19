import EmailIcon from "@mui/icons-material/Email";
import { IconButton } from "@mui/material";
import { StyledTextField } from "./StyledTextField";

interface Props {
  error?: boolean;
  helperText?: string;
}

function EmailTextField(props: Props) {
  return (
    <StyledTextField
      label="Email"
      name="email"
      adornment={{
        type: "end",
        position: "end",
        content: (
          <IconButton aria-label="enter email address">
            {<EmailIcon />}
          </IconButton>
        ),
      }}
      required={true}
      {...props}
    />
  );
}

export { EmailTextField };
