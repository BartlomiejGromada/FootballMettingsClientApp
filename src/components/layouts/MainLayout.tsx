import { DrawerStyled } from "@components/mui";
import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <Grid container height="100vh">
      <DrawerStyled>
        <Outlet />
      </DrawerStyled>
    </Grid>
  );
}

export { MainLayout };
