import React, { useState } from 'react'
import { useEffect } from 'react';

const Count = () => {

    const [counter, setCounter] = useState(0);
    const [title, setTitle] = useState('useEffect in Hooks');
    const [fullName, setFullName] = useState('Sheraz Shahid')

    function increment(){
        setCounter(counter+1);
    }

    useEffect( () => {
        document.title = `Clicked ${counter} times`;

        document.header = `${title}`

        return( ()=> console.log(`Counted ${counter}`))

    })
    
    return (
        <>
            <p>The Count is: {counter}</p>
            <button type="button" onClick={increment}>Click Me to +1</button>
        </>
    )
}

export default Count;