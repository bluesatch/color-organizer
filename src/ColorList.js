// child of App 

import React from 'react';
import Color from './Color';

// Color passes which color to remove using onRemoveColor
const ColorList =({ 
    colors = [], 
    onRemoveColor = f => f,
    onRateColor = f => f })=> {
    if(!colors.length) return <div>No Colors Listed. (Add a Color)</div>;

    return (
        <div>
            {
                colors.map(color => 
                    <Color 
                        key={color.id} 
                        {...color} 
                        onRemove={onRemoveColor}
                        onRate={onRateColor}
                    />
                )
            }
        </div>
    );
}

export default ColorList;

// parent of Color