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
import {useNavigate} from "react-router-dom";
import Title from "./Title";

const drawerWidth = 240;
const navItems = [
  "Home",
  "Services",
  "Portfolio",
  "Blog",
  <Button
  variant="contained"
  color="primary"
  sx={{
    "&:hover": {
      width: "130px",
      height: "7vh",
      transition: "0.5s ease-out",
    },
  }}>Book Demo</Button>
]

function Appbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Title />
      <Divider />
      <List>
        <ListItem onClick={()=>{navigate("/Home")}} >Home</ListItem>
        <ListItem>Portfolio</ListItem>
        <ListItem>Services</ListItem>
        <ListItem>Blogs</ListItem>
        <ListItem>
        <Button
    variant="contained"
    color="primary"
    sx={{
      "&:hover": {
        width: "130px",
        height: "7vh",
        transition: "0.5s ease-out",
      },
    }}>Book Demo</Button>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
    const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
      }}
    >
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          position:'absolute',
          backgroundColor: "white",
          color: "Black",
          width: { xs: "100%", md: "100%" },
          justifyContent:'flex-start',
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
  <Title/>
  <Box
    sx={{
      display: { xs: "none", sm: "block" },
      width: "50%",
    }}
  >
    {navItems.map((item) => (
      <Button
        key={item}
        sx={{ color: "#000", mx: 2, fontWeight: "700" }}
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
