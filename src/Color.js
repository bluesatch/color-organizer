// child of ColorList 
import React from 'react';
import StarRating from './StarRating'
// adding a remove button
// import { FaTrash } from 'react-icons/fa';
import { useColors } from './color-hooks';

const Color = ({ 
        id, 
        title, 
        color, 
        rating
        // onRemove = f => f,
        // onRate = f => f 
    }) => {

    const { rateColor, removeColor } = useColors();
    return (
        <section>
            <h1>{title}</h1>
            {/* add button */}
            <button onClick={()=> removeColor(id)}>
                {/* <FaTrash /> */}X
            </button>
            <div style={{ height: 50, backgroundColor: color }}></div>
            <StarRating 
                selectedStars={rating}
                onRate={rating => rateColor(id, rating)} />
        </section>
    );
}

export default Color;

// parent of StarRating