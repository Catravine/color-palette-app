import React from 'react';
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles(theme => ({
  main: {
    backgroundColor: 'purple',
    border: '3px solid teal'
  }
}));

function MiniPalette() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <h1>Mini Palette</h1>
    </div>
  )
}

export default MiniPalette;