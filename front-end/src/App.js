import React from 'react';
import Layout from './Components/Drawer';
import data from './data.json'
import './App.css';
import theme from './Theme'
import { ThemeProvider } from '@mui/material/styles';
import Settings from './Components/Settings';
import {  Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={ theme }>
        <Routes>
          <Route path='/' element={<Navigate replace to='/home' /> }/>
          <Route path='/home' element={ <Layout organization={ data } /> } />
          <Route path='/settings' element={ <Settings organization={ data }/> } />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
