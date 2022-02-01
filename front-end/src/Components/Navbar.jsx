import React, { useState, useEffect } from "react";
// eslint-disable-next-line
import { AppBar, Box, Toolbar, Typography, Button, IconButton, Tooltip, Avatar, Menu, MenuItem } from '@mui/material';
// eslint-disable-next-line
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css'

const NavBar = ({ organization }) => {
  // eslint-disable-next-line
  const [organizationSettings, setOrganizationSettings] = useState(organization.settings);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    console.log("useEffect Ran in Navbar")
  });

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
    console.log("handle menu ran")
  };

  const handleClose = () => {
    setAnchorEl(null);
    console.log("handleClose ran")
  };

  console.log(organization.name, organization.organizationId, organization.settings, organization.sites, organizationSettings)

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static' color='default' title={ <img src='https://tower.clicktripz.io/clicktripz-logo.svg' alt='logo' /> }>
          <Toolbar>
            <Box
              component='img'
              sx={{ height: 37 }}
              alt='CTZ.Logo'
              src='https://tower.clicktripz.io/clicktripz-logo.svg'
              />

            <Typography variant='h5' component='div' sx={{ flexGrow: 1 }}>
              <div className='organizationNameContainer'>
                <div className='organizationName'>
                  { organization.name }
                </div>
                <div className='organizationId'>
                  { organization.organizationId }
                </div>
              </div>
            </Typography>

            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={ handleMenu }
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={ anchorEl }
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={ Boolean(anchorEl) }
              onClose={ handleClose }
            >
              <MenuItem onClick={ handleClose }>Settings</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
};

export default NavBar;
