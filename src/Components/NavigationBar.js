import React, { useState } from 'react';
import '../css/NavigationBar.css';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

function NavigationBar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const isMobile = window.innerWidth <= 600;

  return (
    <AppBar position="sticky" color="default">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left', margin: '10px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <span className="brand" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Hima Shankaram</span>
            <span style={{ fontSize: '1rem' }}>Charitable Trust</span>
          </div>
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose} component={NavLink} to="/home">Home</MenuItem>
              <MenuItem onClick={handleMenuClose} component={NavLink} to="/gallery">Gallery</MenuItem>
              <MenuItem onClick={handleMenuClose} component={NavLink} to="/vision">Vision</MenuItem>
              <MenuItem onClick={handleMenuClose} component={NavLink} to="/trustees">Trustees</MenuItem>
              <MenuItem onClick={handleMenuClose} component={NavLink} to="/contact">Contact</MenuItem>
            </Menu>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button color="inherit" component={NavLink} to="/home" style={({ isActive }) => (isActive ? { fontWeight: 'bold', color: 'black' } : { color: 'gray' })}>
              Home
            </Button>
            <Button color="inherit" component={NavLink} to="/gallery" style={({ isActive }) => (isActive ? { fontWeight: 'bold', color: 'black' } : { color: 'gray' })}>
              Gallery
            </Button>
            <Button color="inherit" component={NavLink} to="/vision" style={({ isActive }) => (isActive ? { fontWeight: 'bold', color: 'black' } : { color: 'gray' })}>
              Vision
            </Button>
            <Button color="inherit" component={NavLink} to="/trustees" style={({ isActive }) => (isActive ? { fontWeight: 'bold', color: 'black' } : { color: 'gray' })}>
              Trustees
            </Button>
            <Button color="inherit" component={NavLink} to="/contact" style={({ isActive }) => (isActive ? { fontWeight: 'bold', color: 'black' } : { color: 'gray' })}>
              Contact
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default NavigationBar;
