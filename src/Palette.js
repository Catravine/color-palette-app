import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import "./Palette.css";
import { findPalette, generatePalette } from './colorHelpers';
import PaletteFooter from './PaletteFooter';


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
        showingAllColors
      />
      <div className="Palette-colors">
        {colorBoxes}
      </div>
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </div>
  )
}

export default Palette;