import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import Drawer from "@mui/material/Drawer";
import { protectedPages } from "@routes/protectedPages";
import { publicPagesPathes } from "@routes/publicPages";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { logout } from "redux/slices/authSlice";
import { useAppDispatch, useAppSelector } from "redux/store";
import { Logo } from "../Logo";
import "./DrawerStyled.css";

export const drawerWidth = 240;

interface DrawerStyledProps {
  window?: () => Window;
  children: React.ReactNode;
}

function DrawerStyled(props: DrawerStyledProps) {
  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [selectedPathName, setSelectedPathName] = useState("");
  const handleListItemClick = (pathName: string) => {
    setSelectedPathName(pathName);
    navigate(pathName);
  };

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname) {
      setSelectedPathName(pathname);
    }
  }, []);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    navigate(publicPagesPathes.LoginPagePath);
  };

  const currentUser = useAppSelector((state) => state.auth.user);

  const UpperDawerContent = (
    <Grid container flexDirection={"column"}>
      <List disablePadding sx={{ width: "100%" }}>
        {protectedPages.map((page) => (
          <ListItem disablePadding key={page.path} sx={{ paddingX: 1 }}>
            <ListItemButton
              onClick={() => handleListItemClick(page.path)}
              selected={page.path === selectedPathName}
              classes={{ selected: "selectedItem" }}
              sx={{ borderRadius: 1 }}
            >
              <ListItemIcon>{page.icon && <page.icon />}</ListItemIcon>
              <ListItemText primary={page.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Grid>
  );

  const BottomDawerContent = (
    <List
      disablePadding
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Divider flexItem />
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <PersonIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary={`${currentUser?.nickname} (${currentUser?.role})`}
          />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton onClick={logoutHandler}>
          <ListItemIcon>
            <LogoutIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </ListItem>
    </List>
  );

  const drawer = (
    <Grid container justifyContent={"space-between"} height="100%">
      {UpperDawerContent}

      {BottomDawerContent}
    </Grid>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          display: { sm: "none" },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Logo iconColor="secondary.light" />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
        }}
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          <Divider />
          {drawer}
        </Drawer>
      </Box>
      <Grid
        component="main"
        sx={{
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          width: { sm: `calc(100vw - ${drawerWidth}px)` },
          padding: 10,
        }}
      >
        {children}
      </Grid>
    </Box>
  );
}

export { DrawerStyled };