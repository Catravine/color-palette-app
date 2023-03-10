import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';

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
      <Route
        path="/palette/:paletteId/:colorId" 
        element={<SingleColorPalette/ >}
      />
    </Routes>
  );
}

export default App;