import React from 'react';
//import '../css/Search.scss';
import '../css/LeftNavbarItems.scss';

import searchIcon from "../assets/icons/search-icon-png-9973.png";

function Search() {
    return (
        <img id="search" 
            className="left-navbar-item"
            src={searchIcon}
            alt="n/a"
        />
    )
}

export default Search;
