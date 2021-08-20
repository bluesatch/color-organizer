// child of App 

import React from 'react';
import Color from './Color';

const ColorList =({ colors = [] })=> {
    if(!colors.length) return <div>No CoLors Listed.</div>;

    return (
        <div>
            {
                colors.map(color => <Color key={color.id} {...color} />)
            }
        </div>
    )
}

export default ColorList;

// parent of Color