import React from 'react';
import './App.css';
import Navbar from './Components/navbar/navbar';
import Board_container from './Components/board_container/board_container';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Board_container />
    </div>
  );
}

export default App;
