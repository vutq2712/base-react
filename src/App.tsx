import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/common/Navbar';
import { Slider } from './components/common/Slider';

function App() {
  return (
    <>
      <Navbar />
      <Slider/>
    </>
  );
}

export default App;
