import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <Grid
      container
      width="100%"
      height="100%"
      justifyContent="center"
      alignItems="center"
      sx={{ backgroundColor: "secondary.light" }}
    >
      <Outlet />
    </Grid>
  );
}

export { AuthLayout };
