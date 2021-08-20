import React, { useState } from 'react';
import colorData from './data/color-data.json';
import ColorList from './ColorList.js';


const App = ()=> {

  // first iteration, store state in the root and pass colors down to child components to handle the rendering
  const [ colors ] = useState(colorData);

  return <ColorList colors={colors} />;
  // ColorList will receive the colors from App as props
}

export default App;
