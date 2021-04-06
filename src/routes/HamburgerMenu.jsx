import React from 'react';
import '../css/HamburgerMenu.scss';
import hamburgerIcon from "../assets/icons/white-hamburger.png";

function HamburgerMenu() {
    return (
        <img id="hamburger-menu" 
            src={hamburgerIcon}
            alt="n/a"
        />
    )
}

export default HamburgerMenu;
