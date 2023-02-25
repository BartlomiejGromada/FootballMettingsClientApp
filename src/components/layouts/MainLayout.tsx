import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <Grid container>
      <Outlet />
    </Grid>
  );
}

export { MainLayout };
