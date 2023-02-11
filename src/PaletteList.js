import React from 'react';
import seedColors from './seedColors';
import MiniPalette from './MiniPalette';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'blue',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    width: '50%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  nav: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    color: 'white'
  },
  palettes: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3,30%)',
    gridGap: '5%'
  }
}));

function PaletteList() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>React Colors</h1>
        </nav>
        <div className={classes.palettes}>
          {seedColors.map(palette => (
            <MiniPalette props={palette} key={palette.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PaletteList;