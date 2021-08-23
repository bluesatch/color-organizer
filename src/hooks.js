// creating custom hooks
// will eliminate the use of redundant code 
import {  useState } from 'react';

export const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    return [
        { value, onChange: e => setValue.apply(e.target.value) },
        () => setValue(initialValue)
    ];
};