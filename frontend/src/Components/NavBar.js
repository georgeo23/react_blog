import React from 'react';
import { NavLink } from 'react-router-dom';



const NavBar = () => {
    return (
        <nav>
            <NavLink className="home-link" to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/newpost">New Post</NavLink>
        </nav>
    );
}

export default NavBar;
