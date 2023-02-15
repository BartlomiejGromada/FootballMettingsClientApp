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
  error?: boolean;
  helperText?: string;
}

function StyledTextField(props: Props) {
  const {
    type = "text",
    adornment,
    variant = "outlined",
    size = "medium",
  } = props;

  return (
    <TextField
      type={type}
      variant={variant}
      size={size}
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
      {...props}
    />
  );
}

export { StyledTextField };
