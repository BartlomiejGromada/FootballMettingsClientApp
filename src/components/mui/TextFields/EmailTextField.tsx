import { IconButton } from "@mui/material";
import { StyledTextField } from "./StyledTextField";
import EmailIcon from "@mui/icons-material/Email";

interface Props {
  error?: boolean;
  helperText?: string;
}

function EmailTextField(props: Props) {
  return (
    <StyledTextField
      label="Email"
      id="email"
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
