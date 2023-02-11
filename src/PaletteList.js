import React, { Component } from 'react';
import seedColors from './seedColors';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';

class PaletteList extends Component {
  render() {

    return (
      <div>
        <MiniPalette/>
        <h1>React Colors</h1>
        {seedColors.map(palette => (
          <p>
            <Link to={`/palette/${palette.id}`}>
              {palette.paletteName}
            </Link>
          </p>
        ))}
      </div>
    )
  }
}

export default PaletteList;