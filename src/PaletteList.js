import React, { Component } from 'react';
import seedColors from './seedColors';
import MiniPalette from './MiniPalette';

class PaletteList extends Component {
  render() {

    console.log(seedColors);
    return (
      <div>
        <h1>React Colors</h1>
        {seedColors.map(palette => (
          <MiniPalette props={palette} key={palette.id} />
        ))}
      </div>
    )
  }
}

export default PaletteList;