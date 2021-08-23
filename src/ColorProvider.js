// stateful context provider; will rerender the context provider with new context data

import React, { createContext, useState } from 'react';
import colorData from './color-data.json';

const ColorContext = createContext();

const ColorProvider =({ children })=> {
    const [colors, setColors] = useState(colorData);

    return (
        <ColorContext.Provider value={{ colors, setColors }}>
            {children}
        </ColorContext.Provider>
    )
}

export default ColorProvider;