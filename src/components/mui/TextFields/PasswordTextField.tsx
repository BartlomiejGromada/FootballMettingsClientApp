import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useState } from "react";
import { StyledTextField } from "./StyledTextField";

interface Props {
  label?: string;
  name?: string;
  error?: boolean;
  helperText?: string;
}

function PasswordTextField(props: Props) {
  const { label = "Password", name = "password" } = props;
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <StyledTextField
      label={label}
      name={name}
      type={showPassword ? "text" : "password"}
      adornment={{
        type: "end",
        position: "end",
        content: (
          <IconButton onClick={handleClickShowPassword}>
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        ),
      }}
      required={true}
      {...props}
    />
  );
}

export { PasswordTextField };
