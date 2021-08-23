import React from 'react';
// import colorData from './color-data.json';
import ColorList from './ColorList.js';
import AddColorForm from './AddColorForm';
// import { v4 } from 'uuid';


const App = ()=> {

  // first iteration, store state in the root and pass colors down to child components to handle the rendering

  // const [ colors, setColors ] = useState(colorData);

  return (
    // <div>
    //   <AddColorForm 
    //     onNewColor={(title, color) => {
    //       const newColors =[
    //         ...colors,
    //         {
    //           id: v4(),
    //           rating: 0,
    //           title,
    //           color
    //         }
    //       ];
    //       setColors(newColors);
    //     }}
    //   />
    //   <ColorList 
    //     colors={colors} 
    //     onRateColor={(id, rating) => {
    //       const newColors = colors.map(color =>
    //         color.id === id ? { ...color, rating } : color);
    //         setColors(newColors);
    //     }}
    //     onRemoveColor={id => {
    //       const newColors = colors.filter(color => color.id !== id);
    //       setColors(newColors);
    //     }}
    //   />
    // </div>

    // second iteration; using context 
    <div>
      <AddColorForm />
      <ColorList />
    </div>
  
  );
  // ColorList will receive the colors from App as props
}

export default App;
