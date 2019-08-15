import React from 'react';
import logo from './logo.svg';
import './App.css';
import Roulette from "./components/roulette/Roulette"


//         <img src={logo} className="App-logo" alt="logo" />

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Roulette></Roulette>
      </header>
    </div>
  );
}

export default App;
