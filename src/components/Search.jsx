import React from 'react';
import { Link } from 'react-router-dom';
import '../css/LeftNavbarItems.scss'; //actually on the right

import searchIcon from "../assets/icons/search-icon-png-9973.png";

function Search() {
    return (
        <Link  id="navbar-search" 
            className="left-navbar-item"
            role="button"
            to="/search"            
        >
            <img className="nav-link-icon"
                src={searchIcon}
                alt="n/a"
            />
        </Link>
    )
}

export default Search;
