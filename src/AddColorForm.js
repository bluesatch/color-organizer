// using refs => an object that stores values for the lifetime of a component; will access the DOM node directly



// import React, { useRef } from 'react';
import React /*, { useState }*/ from 'react';
import { useInput } from './hooks';


const AddColorForm = ({ onNewColor = f => f}) => {
    // const txtTitle = useRef();
    // const hexColor = useRef();

    // const submit = e => { 
    //     e.preventDefault();
    //     const title = txtTitle.current.value;
    //     const color = hexColor.current.value;
    //     onNewColor(title, color);
    //     // mutates the data; will use controlled components;
    //     // in controlled components, the form values ae managed by React and not the DOM; do not require the use of refs; do not require imperative code; will modify by giving the component control over state
    //     txtTitle.current.value = '';
    //     hexColor.current.value = '';
    // }

    // return (
    //     <form onSubmit={submit}>
    //         <input ref={txtTitle} type="text" placeholder="color title..." required />
    //         <input ref={hexColor} type="color" required />
    //         <button>ADD</button>
    //     </form>
    // )

    // Controlled Component 
    const [titleProps, resetTitle] = useInput('');
    const [colorProps, resetColor] = useInput('#000000');

    const submit = e => { 
        e.preventDefault();
        onNewColor(titleProps.value, colorProps);
        resetTitle('');
        resetColor('');
    };

    return (
        <form onSubmit={submit}>
            <input 
                {...titleProps}
                type="text"
                placeholder="color title..."
                required
            />
            <input 
                {...colorProps}
                type="color"
                required
            />
            <button>ADD</button>
        </form>
    );
}

export default AddColorForm;