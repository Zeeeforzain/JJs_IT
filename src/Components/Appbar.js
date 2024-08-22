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
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Title from "./Title";

const drawerWidth = 240;
const navItems = [
  "Home",
  "Services",
  "Portfolio",
  "Blog",
  <Button key="book-demo" variant="contained" color="primary">
    Book Demo
  </Button>,
];

function Appbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      setScrolled(window.scrollY > 100); // Adjust threshold as needed
    }
  };

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Title sx={{ my: 2 }} />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.key || item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: scrolled ? '#transparent' : '#fff', // White when scrolled, transparent otherwise
          color: scrolled ? '#000' : '#fff', // Black text when scrolled, white otherwise
          transition: 'background-color 0.3s ease', // Smooth transition
          boxShadow: scrolled ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none', // Optional shadow
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
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              width: "50%",
              justifyContent: "space-between"
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.key || item}
                sx={{
                  color: scrolled ? '#000' : '#fff', // Black when scrolled, white otherwise
                  mx: 2,
                }}
              >
                {item}
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
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
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
