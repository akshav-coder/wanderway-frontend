import * as React from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import { AppBar } from "@mui/material";
import { Link, Outlet } from "react-router-dom"; // Import Link from react-router-dom
import logo from "../../assets/travel_logo.png";
import {
  AirlineSeatReclineExtra,
  BedroomParent,
  Luggage,
  ModeOfTravel,
} from "@mui/icons-material";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function AppHeader() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const pages = [
    { text: "Home", icon: <HomeIcon />, path: "/" },
    {
      path: "/hotel-booking",
      text: "Hotel booking",
      icon: <BedroomParent />,
    },
    {
      path: "/travel-booking",
      text: "Travel booking",
      icon: <AirlineSeatReclineExtra />,
    },
    {
      path: "/travel-map",
      text: "Travel Maps",
      icon: <ModeOfTravel />,
    },
    {
      path: "/planner",
      text: "Travel planner",
      icon: <Luggage />,
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" elevation={0}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            edge="start"
            sx={{ marginRight: 1 }}
          >
            <MenuIcon />
          </IconButton>
          <img src={logo} alt="Company-logo" width={"40"} />
          <Typography sx={{ fontSize: "20px", fontWeight: 700 }} noWrap>
            Wanderway
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        PaperProps={{ sx: { top: "64px" } }}
        variant="permanent"
        open={open}
      >
        <List>
          {pages.map((page) => (
            <ListItem key={page.text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                component={Link} // Use Link component to enable routing
                to={page.path} // Specify the path for the route
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {page.icon}
                </ListItemIcon>
                <ListItemText
                  primary={page.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ mt: 8 }}>
        <Outlet />
      </Box>
    </Box>
  );
}
