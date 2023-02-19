import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
import { findPalette, gatherShades } from './colorHelpers';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import { Link } from 'react-router-dom'

function SingleColorPalette(props) {

  let { paletteId, colorId } = useParams();

  const { paletteName, emoji, id } = props

  const palette = findPalette(paletteId);
  const shades = gatherShades(palette, colorId);

  const [format, setFormat] = useState('hex')

  const changeFormat = (val) => setFormat(val)
  
  const colorBoxes = shades.map((color, index) => {
    return (
      <ColorBox 
        key={color.name} 
        name={color.name} 
        background={color[format]} 
        showLink={false}
      />
    );
  })

  return (
    <div className="SingleColorPalette Palette">
      <Navbar handleChange={changeFormat} showingAllColors={false} />
      <div className="Palette-colors">
        {colorBoxes}
        <div className="ColorBox go-back">
          <Link to={`/palette/${paletteId}`} className="back-button">GO BACK</Link>
        </div>
      </div>
      <PaletteFooter paletteName={palette.paletteName} emoji={palette.emoji} />
    </div>
  )
}

export default SingleColorPalette;