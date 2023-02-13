import { InputAdornment, TextField } from "@mui/material";
import React from "react";

interface Props {
  label: string;
  id: string;
  type?: string;
  adornment?: {
    type: "start" | "end";
    position: "start" | "end";
    content: React.ReactNode;
  };
  variant?: "outlined" | "filled" | "standard";
  size?: "small" | "medium";
  required?: boolean;
}

function StyledTextField(props: Props) {
  const {
    label,
    id,
    type = "text",
    adornment,
    variant = "outlined",
    size = "medium",
    required,
  } = props;

  return (
    <TextField
      label={label}
      id={id}
      type={type}
      InputProps={{
        startAdornment:
          adornment?.type === "start" ? (
            <InputAdornment position={adornment.position}>
              {adornment.content}
            </InputAdornment>
          ) : null,
        endAdornment:
          adornment?.type === "end" ? (
            <InputAdornment position={adornment.position}>
              {adornment.content}
            </InputAdornment>
          ) : null,
      }}
      variant={variant}
      size={size}
      required={required}
    />
  );
}

export { StyledTextField };
