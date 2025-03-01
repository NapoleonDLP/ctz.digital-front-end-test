import React, { useState } from "react";
import { styled } from '@mui/material/styles';
// eslint-disable-next-line
import { AppBar, Box, Toolbar, Typography, IconButton, Tooltip, Avatar, Menu, MenuItem } from '@mui/material';
// eslint-disable-next-line
import SettingsIcon from '@mui/icons-material/Settings';
import MuiAppBar from '@mui/material/AppBar';
import { Link } from 'react-router-dom';
import './Navbar.css'

const NavBar = ({ organization, position }) => {
  // eslint-disable-next-line
  const [organizationSettings, setOrganizationSettings] = useState(organization.settings);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    console.log("handleClose ran")
  };

  const drawerWidth = 240;
  const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position={ position } color='black' title={ <img src='https://tower.clicktripz.io/clicktripz-logo.svg' alt='logo' /> }>
          <Toolbar>
            <Link to='/home'>
              <Box
                component='img'
                sx={{ height: 37 }}
                alt='CTZ.Logo'
                src='https://tower.clicktripz.io/clicktripz-logo.svg'
                />
            </Link>

            <Typography variant='h5' component='div' color='white' sx={{ flexGrow: 1 }}>
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
              className='settingsIcon'
            >
              <SettingsIcon className='settingsIcon'/>
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
              <Link to='/settings' style={{ textDecoration: 'none', color: 'inherit'}}>
                <MenuItem onClick={ handleClose }>Settings</MenuItem>
              </Link>
              <MenuItem onClick={ handleClose }>Logout</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
};

export default NavBar;
