import React from 'react';
import NavBar from './Navbar';
import './Settings.css';

const Settings = ({ organization }) => {

  return (
    <div className='settingsContainer'>
      <div>
        <NavBar organization={ organization } className='settingsNavbar'/>
      </div>
      <div>
        <h1 className='settingsBox'>SETTINGS PAGE</h1>
      </div>
    </div>
  )
};

export default Settings;
