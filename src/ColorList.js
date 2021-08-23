// child of App 

import React, { useContext } from 'react';
// adding useContext hook 
import { ColorContext } from './';
import Color from './Color';

// Color passes which color to remove using onRemoveColor
// const ColorList =({ 
//     colors = [], 
//     onRemoveColor = f => f,
//     onRateColor = f => f })=> {
//     if(!colors.length) return <div>No Colors Listed. (Add a Color)</div>;

//     return (
//         <div>
//             {
//                 colors.map(color => 
//                     <Color 
//                         key={color.id} 
//                         {...color} 
//                         onRemove={onRemoveColor}
//                         onRate={onRateColor}
//                     />
//                 )
//             }
//         </div>
//     );
// }

const ColorList =()=> {
    const { colors } = useContext(ColorContext);
    if (!colors.length) return <div>No Colors Listed. (Add a Color)</div>

    return (
        <div className="color-list">
            {
                colors.map(color => <Color key={color.id} {...color} />)
            }
        </div>
    )
}

export default ColorList;

// parent of Color