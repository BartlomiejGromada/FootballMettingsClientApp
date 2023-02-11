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
      minHeight={"100vh"}
      rowSpacing={4}
    >
      <Grid item>
        <Logo />
      </Grid>

      <Grid item>
        <RegisterForm />
      </Grid>
    </Grid>
  );
}
