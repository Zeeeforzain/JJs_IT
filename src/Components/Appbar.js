import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Title from "./Title";

const drawerWidth = 240;
const navItems = [
  { label: "Home", path: "/Home" },
  { label: "Services", path: "/Tools" },
  {
    label: (
      <Button
        variant="contained"
        color="error"
        sx={{
          "&:hover": {
            width: "130px",
            height: "7vh",
            transition: "0.5s ease-out",
          },
        }}
      >
        Book Demo
      </Button>
    ),
  },
];

function Appbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleNavClick = (path) => {
    navigate(path);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Title />
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem
            key={index}
            onClick={() => item.path && handleNavClick(item.path)}
            sx={{ cursor: item.path ? "pointer" : "default" }}
          >
            {item.label}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          position: "absolute",
          backgroundColor: "white",
          color: "Black",
          width: { xs: "100%", md: "100%" },
          justifyContent: "flex-start",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Title />
          <Box sx={{ display: { xs: "none", sm: "block" }, width: "35%" }}>
            {navItems.map((item, index) => (
              <Button
                key={index}
                onClick={() => item.path && handleNavClick(item.path)}
                sx={{ color: "#000", mx: 2, fontWeight: "700" }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
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
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

Appbar.propTypes = {
  window: PropTypes.func,
};

export default Appbar;
