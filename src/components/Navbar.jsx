import React from 'react';
import HamburgerMenu from '../routes/HamburgerMenu';
import SiteLogo from '../routes/SiteLogo';
import Search from '../routes/Search';
import Cart from '../routes/Cart';
import UserLogin from '../routes/UserLogin';
import '../css/Navbar.scss';

function Navbar(props) {
    return (
        <ul id="nav-bar">
           <HamburgerMenu></HamburgerMenu> 
           <SiteLogo></SiteLogo>
           <Search></Search>
           <Cart></Cart>
           <UserLogin></UserLogin>
        </ul>
    )
}

export default Navbar;