import React from 'react';

const name = "Sheraz";

const Header = () => {
    return (

    <header className="NavBar">
        <img src = "https://i.imgur.com/nHdhFtO.png" alt="QA Logo"/>
        <p>Welcome to {name}'s page</p>
    </header>
 
    )
}

export default Header;