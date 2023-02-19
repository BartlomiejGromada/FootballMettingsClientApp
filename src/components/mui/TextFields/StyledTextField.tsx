import { InputAdornment, TextField } from "@mui/material";
import React from "react";
import { useFormContext } from "react-hook-form";

interface Props {
  name: string;
  label: string;
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
    name,
    adornment,
    variant = "outlined",
    size = "medium",
  } = props;

  const {
    register,
    formState: { errors, dirtyFields },
  } = useFormContext();

  return (
    <TextField
      {...register(name)}
      error={!!errors[name]}
      helperText={errors[name]?.message?.toString() ?? ""}
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
