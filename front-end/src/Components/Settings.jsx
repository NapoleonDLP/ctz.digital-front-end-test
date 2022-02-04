// eslint-disable-next-line
import React, { useState } from 'react';
import NavBar from './Navbar';
import GeneralSettings from './GeneralSettings';
import RevenueSettings from './RevenueSettings';
import DocumentSettings from './DocumentSettings';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import SettingsIcon from '@mui/icons-material/Settings';
import InsightsIcon from '@mui/icons-material/Insights';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

import './Settings.css';

const Settings = ({ organization, position }) => {
  const icons = [ <SettingsIcon />, <InsightsIcon />, <InsertDriveFileIcon /> ];
  // eslint-disable-next-line
  const [view, setView] = useState('General');
  const views = {
    'General': <GeneralSettings settings={ organization.settings }/>,
    'Revenue': <RevenueSettings revenue={ organization.settings.revenue }/>,
    'Document': <DocumentSettings settings={ organization.settings }/>
  };

  return (
    <div>
      <div>
        <NavBar position='static' organization={ organization } className='settingsNavbar'/>
      </div>
      <div className='settingsContainer'>
        <div>
          <Box sx={{ width: '100%', maxWidth: 200, bgcolor: 'background.paper' }}>
            <nav aria-label="main mailbox folders">
              <List>
                {
                  ['General', 'Revenue', 'Document'].map((setting, index) => (
                    <ListItemButton onClick={ () => setView(setting) } key={ index }>
                      <ListItem disablePadding>
                        <ListItemIcon>
                          { icons[ index ]}
                        </ListItemIcon>
                        <ListItemText primary={ setting } />
                      </ListItem>
                    </ListItemButton>
                  ))
                }
              </List>
            </nav>
            <Divider />
            <nav aria-label="secondary mailbox folders">
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Trash" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="#simple-list">
                    <ListItemText primary="Spam" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Box>
        </div>
        <div>
          <Box>
            <div className='cardContainer'>
              {
                views[view]
              }
            </div>
          </Box>
        </div>
      </div>
    </div>
  )
};

export default Settings;
