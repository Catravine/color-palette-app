import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import "./Palette.css";
import { findPalette, generatePalette } from './colorHelpers';


function Palette(props) {

  let { id } = useParams();
  const paletteData = generatePalette(findPalette(id))

  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState('hex');

  const changeLevel = (level) => {
    setLevel(level)
  }

  const changeFormat = (val) => {
    setFormat(val)
  }

  const { colors, paletteName, emoji } = paletteData;
  
  const colorBoxes = colors[level].map((color) => {
    return <ColorBox 
      background={color[format]} 
      name={color.name} 
      key={color.id} 
      moreUrl={`/palette/${id}/${color.id}`}
      showLink={true}
    />
  });

  return (
    <div className="Palette">
      <Navbar 
        level={level} 
        changeLevel={changeLevel}
        handleChange={changeFormat}
      />
      <div className="Palette-colors">
        {colorBoxes}
      </div>
      <footer className="Palette-footer">
        {paletteName}
        <span className="emoji">{emoji}</span>
      </footer>
    </div>
  )
}

export default Palette;