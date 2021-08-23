// child of ColorList 
import React from 'react';
import StarRating from './StarRating'
// adding a remove button
import { FaTrash } from 'react-icons/fa';

const Color = ({ 
        id, 
        title, 
        color, 
        rating, 
        onRemove = f => f,
        onRate = f => f 
    }) => {
    return (
        <section>
            <h1>{title}</h1>
            {/* add button */}
            <button onClick={()=> onRemove(id)}>
                <FaTrash />
            </button>
            <div style={{ height: 50, backgroundColor: color }}></div>
            <StarRating 
                selectedStars={rating}
                onRate={rating => onRate(id, rating)} />
        </section>
    );
}

export default Color;

// parent of StarRating