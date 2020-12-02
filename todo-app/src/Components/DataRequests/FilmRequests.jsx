import React, {useState} from 'react';
import axios from 'axios';
import FilmOutput from './FilmOutput';

const FilmRequests = (props) => {

    const [error, setError] = useState(null);
    const [film, setFilm] = useState(``);

    function getTitle() {
        axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=9fd51617" + "&t=" + props.title)
        .then( (response) => {
            setFilm(response.data);
        })
        .catch( (error) => {
            setError(error);
        })
    }

    
    if (error) {
        return <div>Error is: {error.message}</div>
    }
    else {
        return (
            <>

            <button type="submit" onClick={getTitle}>Enter</button>

            <FilmOutput film={film}/>
            </>
        );
    }
}

export default FilmRequests;
