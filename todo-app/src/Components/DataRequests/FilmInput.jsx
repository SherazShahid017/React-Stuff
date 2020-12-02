import React, {useState} from 'react';
import FilmRequests from './FilmRequests';

const FilmInput = () => {

    const [title, setTitle] = useState(``);

    function enterTitle(e) {
        setTitle(e.target.value)
    }

    return (
        <>
            <h1>Film Database API</h1>

            <p>Enter Film Title</p>
            <input type="text" onChange={(e) => enterTitle(e)}/>

            <FilmRequests title={title}/>
        </>
    );
}

export default FilmInput;