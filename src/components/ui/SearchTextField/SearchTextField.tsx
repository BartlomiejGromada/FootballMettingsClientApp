import { IconButton, InputAdornment, TextField } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

interface SearchTextFieldProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  fullWidth?: boolean;
}

export function SearchTextField(props: SearchTextFieldProps) {
  const { value, setValue, fullWidth } = props;

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setValue(e.target.value);
  };

  const clearHandleClick = () => {
    setValue("");
  };

  return (
    <TextField
      size="small"
      variant="outlined"
      value={value}
      onChange={handleChange}
      fullWidth={fullWidth}
      placeholder="Search"
      sx={{ width: !fullWidth ? { xs: "100%", sm: "50%", md: 400 } : "100%" }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment
            position="end"
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <IconButton
              sx={{ display: value.length > 0 ? "flex" : "none" }}
              size="small"
              onClick={clearHandleClick}
            >
              <ClearIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
