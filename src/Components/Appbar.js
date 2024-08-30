import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useNavigate } from 'react-router-dom';
import Title from './Title';

const drawerWidth = 220;
const navItems = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/#tools" },
  {
    label: (
      <Button
        variant="contained"
        color="primary"
        sx={{
          "&:hover": {
            width: "130px",
            height: "7vh",
            transition: "0.5s ease-out",
          },
        }}
      >
        Contact Us
      </Button>
    ),
    path: "/ContactForm",
  },
];

function Appbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [scrolling, setScrolling] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleNavClick = (path) => {
    if (path === "/#tools") {
      navigate('/');
      setTimeout(() => {
        const toolsSection = document.getElementById('tools');
        if (toolsSection) {
          toolsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      navigate(path);
    }
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  React.useEffect(() => {
    setScrolling(trigger);
  }, [trigger]);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box
      margin={"10px 0px 10px 0px"}
      ><Title img="Images/jjs_it.png" width='50px' /></Box>
      <Divider />
      <List>
        {navItems.map((item, index) => (
            <ListItem
            key={index}
            onClick={() => item.path && handleNavClick(item.path)}
            sx={{ 
              cursor: item.path ? "pointer" : "default",
              justifyContent: "center",
              textAlign: "center",
              width: "100%" 
            }}
          >
            {item.label}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", justifyContent: "start" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          position: "fixed",
          backgroundColor: scrolling ? "white" : "transparent",
          color: scrolling ? "black" : "white",
          width: { xs: "100%", md: "100%" },
          display: "flex",
          justifyContent: "center",
          boxShadow: scrolling ? 1 : 0,
          transition: "background-color 0.3s ease, color 0.3s ease",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            flexDirection: { xs: "row-reverse", md: "row" },
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ mr: 0, display: { xs: "block", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
      margin={"10px 0px 10px 0px"}
      >
          <Title img="Images/jjs_it.png" width='50px'
            sx={{
              display: { xs: "block", sm: "block" },
              flexGrow: 0,
              ml: { xs: 0, sm: 2 },
              textAlign: { xs: "left", sm: "inherit" },
            }}
          /></Box>

          <Box sx={{ display: { xs: "none", sm: "block" }, width: "32%" }}>
            {navItems.map((item, index) => (
              <Button
                key={index}
                onClick={() => handleNavClick(item.path)}
                sx={{
                  color: scrolling ? "black" : "white",
                  mx: 2,
                  fontWeight: "700",
                }}
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
            keepMounted: true, 
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
