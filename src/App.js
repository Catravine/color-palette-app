import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Palette from './Palette';
import seedColors from "./seedColors";
import { generatePalette } from './colorHelpers';

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>LIST OF PALETTES</h1>} />
      <Route path="/palette/:id" element={<h1>individual palletes</h1>} />
    </Routes>
    // <div className="App">
    //   <Palette palette={generatePalette(seedColors[4])} />
    // </div>
  );
}

export default App;
