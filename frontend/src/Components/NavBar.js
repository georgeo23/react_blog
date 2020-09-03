import React from 'react';
import { NavLink } from 'react-router-dom';



const NavBar = () => {
    return (
        <nav>
            <NavLink className="home-link navlink" to="/">Home</NavLink>
            <NavLink className="navlink" activeClassName="active" to="/newpost">New Post</NavLink>
        </nav>
    );
}

export default NavBar;
