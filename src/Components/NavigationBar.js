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
    <AppBar position="sticky" className="site-navbar" elevation={0}>
      <Toolbar className="navbar-toolbar">
        <Typography variant="h6" component="div" className="brand-block">
          <div className="brand-stack">
            <span className="brand-name">Hima Shankaram</span>
            <span className="brand-subtitle">Charitable Trust</span>
          </div>
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
              className="menu-button"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              PaperProps={{
                className: 'mobile-menu-paper',
                sx: {
                  mt: 1,
                  borderRadius: '16px',
                  boxShadow: '0 18px 40px rgba(15, 76, 92, 0.14)',
                  border: '1px solid rgba(15, 76, 92, 0.08)',
                  overflow: 'hidden',
                },
              }}
              MenuListProps={{
                sx: {
                  padding: 0,
                },
              }}
            >
              <MenuItem onClick={handleMenuClose} component={NavLink} to="/home" className="mobile-nav-item">Home</MenuItem>
              <MenuItem onClick={handleMenuClose} component={NavLink} to="/gallery" className="mobile-nav-item">Gallery</MenuItem>
              <MenuItem onClick={handleMenuClose} component={NavLink} to="/vision" className="mobile-nav-item">Vision</MenuItem>
              <MenuItem onClick={handleMenuClose} component={NavLink} to="/trustees" className="mobile-nav-item">Trustees</MenuItem>
              <MenuItem onClick={handleMenuClose} component={NavLink} to="/contact" className="mobile-nav-item">Contact</MenuItem>
            </Menu>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button color="inherit" component={NavLink} to="/home" className="nav-link" style={({ isActive }) => (isActive ? { fontWeight: '700', color: '#0f4c5c' } : { color: '#48616d' })}>
              Home
            </Button>
            <Button color="inherit" component={NavLink} to="/gallery" className="nav-link" style={({ isActive }) => (isActive ? { fontWeight: '700', color: '#0f4c5c' } : { color: '#48616d' })}>
              Gallery
            </Button>
            <Button color="inherit" component={NavLink} to="/vision" className="nav-link" style={({ isActive }) => (isActive ? { fontWeight: '700', color: '#0f4c5c' } : { color: '#48616d' })}>
              Vision
            </Button>
            <Button color="inherit" component={NavLink} to="/trustees" className="nav-link" style={({ isActive }) => (isActive ? { fontWeight: '700', color: '#0f4c5c' } : { color: '#48616d' })}>
              Trustees
            </Button>
            <Button color="inherit" component={NavLink} to="/contact" className="nav-link" style={({ isActive }) => (isActive ? { fontWeight: '700', color: '#0f4c5c' } : { color: '#48616d' })}>
              Contact
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default NavigationBar;
