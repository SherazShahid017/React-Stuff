import React from 'react';

const FilmOutput = (props) => {


    return (
        <>
            <h3>{props.film.Title}</h3>
            <h4>{props.film.Year}</h4>
            <h4>{props.film.Genre}</h4>
        </>
    );
}

export default FilmOutput;