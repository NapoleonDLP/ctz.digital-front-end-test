import React, { useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Switch from '@mui/material/Switch';
import './GeneralSettings.css';

const GeneralSettings = ({ settings }) => {
  const [enabled, setEnabled] = useState(settings.enabled);
  const [testPublisher, setTestPublisher] = useState(settings.testPublisher);
  // eslint-disable-next-line
  const [accountType, setAccountType] = useState(settings.general.accountType);

  const handleToggle = (value) => () => {
    if (value === 'enabled') {
      setEnabled(!enabled);
    } else if (value === 'testPublisher') {
      setTestPublisher(!testPublisher);
    }
  };

  return (
    <List
      sx={{ width: 400, maxWidth: 500 }}
      className='generalList'
      raised='true'
    >
      <Box>
        <ListItem className='generalListHeader'>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Enable" />
          <Switch
            onChange={ handleToggle('enabled') }
          />
        </ListItem>
        <ListItem>
          <ListItemText primary="Test Publisher" />
          <Switch
            onChange={ handleToggle('testPublisher') }
          />
        </ListItem>
        <ListItem>
            <ListItemText primary={ accountType } />
        </ListItem>
      </Box>
    </List>
  )
};

export default GeneralSettings;
