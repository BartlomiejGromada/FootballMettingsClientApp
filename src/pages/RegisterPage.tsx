import { Logo } from "@components/ui/Logo";
import { RegisterForm } from "@features/Register";
import { Grid } from "@mui/material";
import React from "react";

export function RegisterPage() {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      width={"100%"}
      height={"100%"}
      sx={{ backgroundColor: "#fff176" }}
    >
      <Grid item marginBottom={2}>
        <Logo />
      </Grid>

      <Grid item>
        <RegisterForm />
      </Grid>
    </Grid>
  );
}
