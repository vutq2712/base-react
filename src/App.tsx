import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/common/Navbar';
import { Slider } from './components/common/Slider';
import { Tab } from './components/common/Tab';

function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <Tab />
    </>
  );
}

export default App;
