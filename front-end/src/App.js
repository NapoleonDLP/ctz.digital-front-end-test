import React from 'react';
import Layout from './Components/Drawer';
import data from './data.json'
import './App.css';
import theme from './Theme'
import { ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={ theme }>
        <Layout organization={ data } />
      </ThemeProvider>
    </div>
  );
}

export default App;
