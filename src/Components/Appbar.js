import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useNavigate } from 'react-router-dom';
import Title from './Title';
import ButtonComponent from './Button';
import BoxComponent from './Box';

const drawerWidth = 220;
const navItems = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/#tools" },
  {
    label: (
      <BoxComponent
        sx={{
          height:{xs:'auto', sm:'5vh', md:'6.5vh', lg:'7.5vh', xl:'7.5vh'},
          width:{xs:'auto', sm:'100px', md:'125px', lg:'135px', xl:'165px'}
        }}>
        <ButtonComponent
          variant="contained"
          color="var(--primary)"
          sx={{
            textTransform: "none",
            fontFamily:'var(--main)',
            padding: '10px 5px',
            borderRadius:'8px',
            width: {xs:'100px', md:'120px', lg:'130px', xl:'160px'}, 
            height: {xs:'5vh', md:'6vh', lg:'7vh', xl:'7vh'}, 
            transition: "width 0.3s ease-out, height 0.3s ease-out", 
            "&:hover": {
              transform: 'scale(1.1)',
              cursor:'pointer',
              transition:'0.5s ease-out'
            }
          }}
        >
          Contact Us
        </ButtonComponent>
      </BoxComponent>
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
    <BoxComponent onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <BoxComponent margin={"10px 0px 10px 10px"}>
        <Title img="Images/jjs_it.png" width='50px' />
      </BoxComponent>
      <Divider />
      <List>
        {navItems.map((item, num) => (
          <ListItem
            key={num}
            onClick={() => item.path && handleNavClick(item.path)}
            sx={{ 
              cursor: item.path ? "pointer" : "default",
              justifyContent: "left",
              textAlign: "center",
              width: "100%",
              fontFamily:'var(--main)',
            }}
          >
            {item.label}
          </ListItem>
        ))}
      </List>
    </BoxComponent>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <BoxComponent sx={{ display: "flex", justifyContent: "center", alignItems:'center' }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: scrolling ? "var(--light)" : "transparent",
          color: scrolling ? "var(--dull)" : "var(--light)",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          boxShadow: scrolling ? 1 : 0,
          transition: "background-color 0.5s ease, color 0.5s ease",
          padding: { xs: '0px', sm: '0px', md: '0px', lg: '0px', xl: '0px 150px 0px 0px' }
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", flexDirection: { xs: "row-reverse", sm: 'row-reverse', md: "row" } }}>
         
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ mr: 0, display: { xs: "block", sm: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <BoxComponent margin={{ xs: '10px 0px 10px 0px', md: "10px 0px 10px 50px" }}>
            <Title img="Images/jjs_it.png" width='50px' />
          </BoxComponent>

        
          <BoxComponent sx={{ display: { xs: "none", sm: "none", md: "block" }, width: "auto" }}>
            {navItems.map((item, index) => (
              <ButtonComponent
                key={index}
                onClick={() => handleNavClick(item.path)}
                sx={{
                  color: scrolling ? "var(--dull)" : "var(--light)",
                  mx: 2,
                  fontSize: '15px',
                  fontWeight: "500",
                  textTransform: 'none',
                  fontFamily: 'var(--main)',
                }}
              >
                {item.label}
              </ButtonComponent>
            ))}
          </BoxComponent>
        </Toolbar>
      </AppBar>

      {/* Drawer for xs and sm screens */}
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "block", md: "none" }, // Drawer for xs and sm
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      {/* Placeholder for the rest of the page content */}
      <BoxComponent component="main" sx={{ p: 3 }}>
        <Toolbar />
      </BoxComponent>
    </BoxComponent>
  );
}

Appbar.propTypes = {
  window: PropTypes.func,
};

export default Appbar;
