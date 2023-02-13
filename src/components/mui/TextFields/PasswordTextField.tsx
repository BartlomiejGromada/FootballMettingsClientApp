import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useState } from "react";
import { StyledTextField } from "./StyledTextField";

interface Props {
  label?: string;
  id?: string;
  ariaLabelIconVisibility?: string;
}

function PasswordTextField(props: Props) {
  const {
    label = "Password",
    id = "password",
    ariaLabelIconVisibility = "toggle password visibility",
  } = props;
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <StyledTextField
      label={label}
      id={id}
      type={showPassword ? "text" : "password"}
      adornment={{
        type: "end",
        position: "end",
        content: (
          <IconButton
            aria-label={ariaLabelIconVisibility}
            onClick={handleClickShowPassword}
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        ),
      }}
      required={true}
    />
  );
}

export { PasswordTextField };
