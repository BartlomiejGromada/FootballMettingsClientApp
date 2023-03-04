import { DrawerStyled } from "@components/mui";
import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <Grid container>
      <DrawerStyled>
        <Outlet />
      </DrawerStyled>
    </Grid>
  );
}

export { MainLayout };
