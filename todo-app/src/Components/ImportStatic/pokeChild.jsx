import React from 'react';

const PokeChild = (props) => {

    return (

        <div>

            <p key={props.name}> Hi, I'm a {props.name}. Find out more about me from: {props.url}</p>

        </div>

    );
}

export default PokeChild;