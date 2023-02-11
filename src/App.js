import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Palette from './Palette';
import PaletteList from './PaletteList';

function App() {

  return (
    <Routes>
      <Route 
        path="/" 
        element={<PaletteList />} 
      />
      <Route 
        path="/palette/:id" 
        element={<Palette />}
      />
    </Routes>
  );
}

export default App;