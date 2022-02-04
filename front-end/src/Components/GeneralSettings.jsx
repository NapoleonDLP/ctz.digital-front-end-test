import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Switch from '@mui/material/Switch';

const GeneralSettings = ({ settings }) => {
  const [enabled, setEnabled] = React.useState(settings.enabled);
  const [testPublisher, setTestPublisher] = React.useState(settings.testPublisher);


    //timezone: string
    //accountType: string

  const handleToggle = (value) => () => {
    if (value === 'enabled') {
      setEnabled(!enabled);
    } else if (value === 'testPublisher') {
      setTestPublisher(!testPublisher);
    }
  };

  return (
    <List
      sx={{ width: 400, maxWidth: 500, bgcolor: 'background.paper' }}
      subheader={<ListSubheader>Settings</ListSubheader>}
    >
      <ListItem justifyContent='space-between'>
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
    </List>
  )
};

export default GeneralSettings;
