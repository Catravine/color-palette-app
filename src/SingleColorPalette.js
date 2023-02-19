import React from 'react';
import { useParams } from 'react-router-dom'
import { findPalette, gatherShades } from './colorHelpers';
import ColorBox from './ColorBox';
import { color } from '@mui/system';

function SingleColorPalette(props) {

  let { paletteId, colorId } = useParams();

  const palette = findPalette(paletteId);
  const shades = gatherShades(palette, colorId);
  
  const colorBoxes = shades.map(color => {
    return (
      <ColorBox 
        key={color.id} 
        name={color.name} 
        background={color.hex} 
        showLink={false}
      />
    );
  })

  return (
    <div className="Palette">
      <h1>Single Color palette!</h1>
      <div className="Palette-colors">
        {colorBoxes}
      </div>
    </div>
  )
}

export default SingleColorPalette;