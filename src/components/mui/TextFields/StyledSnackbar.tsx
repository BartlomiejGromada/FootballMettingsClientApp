import { AlertProps, Snackbar, Stack } from "@mui/material";
import Alert from "@mui/material/Alert";
import React, { useState } from "react";

const CustomAlert = React.forwardRef<HTMLDivElement, AlertProps>(
  function CreateAlert(props, ref) {
    return <Alert elevation={6} ref={ref} variant="filled" {...props} />;
  }
);

interface StyledSnackbarProps {
  text: string;
  isOpen: boolean;
}

function StyledSnackbar(props: StyledSnackbarProps) {
  const { text, isOpen } = props;

  const [open, setOpen] = useState(isOpen);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <CustomAlert
          onClose={handleClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          This is a success message!
        </CustomAlert>
      </Snackbar>
      {/* <Alert severity="error">This is an error message!</Alert>
      <Alert severity="warning">This is a warning message!</Alert>
      <Alert severity="info">This is an information message!</Alert>
      <Alert severity="success">This is a success message!</Alert> */}
    </Stack>
  );
}

export { StyledSnackbar };
