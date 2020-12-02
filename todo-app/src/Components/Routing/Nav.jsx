import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {

    return(
        <>
        <div>
            <Link to="/">Home</Link>
        </div>

        <div>
            <Link to="/about">About Us</Link>
        </div>

        <div>
            <Link to="/users/:id">User ID</Link>
        </div>

        <div>
            <Link to="/employee">Employee Info</Link>
        </div>

        <div>
            <Link to="/films">Film API</Link>
        </div>
        </>
    )
}

export default Nav;