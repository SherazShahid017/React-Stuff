import React from 'react';
import pokeAPI from './pokeAPI.json';
import PokeChild from './pokeChild';

const PokeParent = () => {

    return (

        <div>
            {
                pokeAPI.map((pokeAPI) => (

                    <PokeChild  
                        name={pokeAPI.name} 
                        url={pokeAPI.url}
                    />

                ))
            }


        </div>

    );

}

export default PokeParent;