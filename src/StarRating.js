// child of Color 
import React from 'react';
import { FaStar } from 'react-icons/fa'


const createArray = length => [...Array(length)];

const Star = ({ selected = false, onSelect = f => f})=> (
    <FaStar color={selected ? 'dodgerblue': 'grey' } onClick={onSelect} />
)

const StarRating =({ 
        totalStars = 5, 
        selectedStars = 0,
        onRate = f => f
    })=> {
    return (
        <div>
            {createArray(totalStars).map((n, i) => (
                <Star 
                    key={i}
                    selected={selectedStars > i}
                    onSelect={() => onRate(i + 1)}
                />
            ))}
            <p>
                {selectedStars} of {totalStars} stars
            </p>
        </div>
    )
}

export default StarRating;

// parent of Star