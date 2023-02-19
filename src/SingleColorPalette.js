import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
import { findPalette, gatherShades } from './colorHelpers';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';

function SingleColorPalette(props) {

  let { paletteId, colorId } = useParams();

  const { paletteName, emoji } = props

  const palette = findPalette(paletteId);
  const shades = gatherShades(palette, colorId);

  const [format, setFormat] = useState('hex')

  const changeFormat = (val) => setFormat(val)
  
  const colorBoxes = shades.map((color, index) => {
    console.log(color, index)
    return (
      <ColorBox 
        key={`${color.id}-${index + 1}00`} 
        name={color.name} 
        background={color[format]} 
        showLink={false}
      />
    );
  })

  return (
    <div className="Palette">
      <Navbar handleChange={changeFormat} showingAllColors={false} />
      <div className="Palette-colors">
        {colorBoxes}
      </div>
      <PaletteFooter paletteName={palette.paletteName} emoji={palette.emoji} />
    </div>
  )
}

export default SingleColorPalette;