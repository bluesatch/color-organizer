import React, { useState } from 'react';
import colorData from './color-data.json';
import ColorList from './ColorList.js';


const App = ()=> {

  // first iteration, store state in the root and pass colors down to child components to handle the rendering

  // second iteration, passing onRemove function in Color and moving it up the component tree

  // third iteration, passing onRate function in Color and moving it up the component tree


  const [ colors, setColors ] = useState(colorData);

  return (
    <ColorList 
      colors={colors} 
      onRateColor={(id, rating) => {
        const newColors = colors.map(color =>
          color.id === id ? { ...color, rating } : color);
          setColors(newColors);
      }}
      onRemoveColor={id => {
        const newColors = colors.filter(color => color.id !== id);
        setColors(newColors);
      }}
      />);
  // ColorList will receive the colors from App as props
}

export default App;
