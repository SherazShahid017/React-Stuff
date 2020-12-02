import React from 'react';
import { useParams } from 'react-router-dom';

const Users = () => {

    let {id} = useParams();

    return(

        <div>
            <h1>The ID from the URL is: {id}</h1>
        </div>
    );
}

export default Users;