import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import MockApi from './components/MockApi';
import TypiCode from './components/TypiCode';
import HooksTest from './components/HooksTest';
import Addform from './components/AddForm';
import Expense from './components/Expense';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
        <h1>React Hooks</h1>
        <Button onClick={() =>{ navigate('/mockapi')}}>Mock Api</Button>
        <Button onClick={() =>{ navigate('/hookstest')}}>Hooks Test</Button>
        <Button onClick={() =>{ navigate('/typicode')}}>Typi Code</Button>
        <Button onClick={() =>{ navigate('/expense')}}>Expense</Button>
    
    <Routes>
      <Route path="mockapi" element={ <MockApi/> } />
      <Route path="typicode" element={ <TypiCode/> } />
      <Route path="hookstest" element={ <HooksTest/> } />
      <Route path="addform" element={ <Addform/> } />
      <Route path="expense" element={ <Expense /> } />
    </Routes>
    </div>
  );
}

export default App;
