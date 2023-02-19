import chroma from 'chroma-js';
import seedColors from "./seedColors";

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function generatePalette(starterPalette) {
  let newPalette = {
    paletteName: starterPalette.paletteName,
    id: starterPalette.id,
    emoji: starterPalette.emoji,
    colors: {}
  }
  for (let level of levels) {
    newPalette.colors[level] = [];
  }
  for (let color of starterPalette.colors) {
    let scale = generateScale(color.color, 10).reverse();
    for (let i in scale) {
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, "-"),
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i]).css().replace("rgb", "rgba").replace(")", ",1.0)")
      })
    }
  }
  return newPalette;
}

function getRange(hexColor) {
  const end = "#fff"
  return [
    chroma(hexColor).darken(1.4).hex(), hexColor, end
  ]
}

function generateScale(hexColor, numberOfColors) {
  return chroma.scale(getRange(hexColor)).mode("lab").colors(numberOfColors)
}

function findPalette(id) {
  return seedColors.find(function(palette) {
    return palette.id === id;
  });
}

function gatherShades(palette, colorId){
  let shades = [];
  let allColors = generatePalette(palette).colors;
  for (let level in allColors) {
    if (level !== '50') { // don't need base white color at '50'
      let thisShade = allColors[level].filter(color => { return color.id === colorId })
      if (thisShade.length > 0) shades.push(thisShade[0])
    }
  }
  return shades;
}

export { findPalette, generatePalette, gatherShades };