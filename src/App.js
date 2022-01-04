import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import MockApi from './components/MockApi';
import TypiCode from './components/TypiCode';
import HooksTest from './components/HooksTest';
import Addform from './components/AddForm';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

function App() {

  return (
    <div className="App">
      <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
      <h1>React Hooks</h1>
        <Link to="mockapi" component="button" variant="body2">Mock Api</Link>
        <Link to="hookstest">Hooks Test</Link>
        <Link to="typicode">Typi Code</Link>
        </Toolbar>
      </Container>
    </AppBar>
    
    <Routes>
      <Route path="mockapi" element={ <MockApi/> } />
      <Route path="typicode" element={ <TypiCode/> } />
      <Route path="hookstest" element={ <HooksTest/> } />
      <Route path="addform" element={ <Addform/> } />
    </Routes>
    </div>
  );
}

export default App;
