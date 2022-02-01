import React from 'react';
// import logo from './logo.svg';
import NavBar from './Components/Navbar';
import data from './data.json'
import './App.css';
import theme from './Theme'
import { ThemeProvider } from '@mui/material/styles';


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={ theme }>
        <NavBar organization={ data }/>
      </ThemeProvider>
    </div>
  );
}

export default App;
