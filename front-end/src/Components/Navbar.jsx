import React, { useState, useEffect } from "react";
import { AppBar, Box, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = ({ organization }) => {
  // eslint-disable-next-line
  const [organizationSettings, setOrganizationSettings] = useState(organization.settings);

  useEffect(() => {

  });

  console.log(organization.name, organization.organizationId, organization.settings, organization.sites, organizationSettings)

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static' color='secondary'>
          <Toolbar>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2 }}
            >

              <MenuIcon />
            </IconButton>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              { organization.name }
            </Typography>
            <Button color='inherit'>Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
};

export default NavBar;
