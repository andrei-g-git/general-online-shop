import React from 'react';
import HamburgerMenu from '../routes/HamburgerMenu';
import SiteLogo from '../routes/SiteLogo';
import Search from '../routes/Search';
import Cart from '../routes/Cart';
import UserLogin from '../routes/UserLogin';

function Navbar(props) {
    return (
        <ul>
           <HamburgerMenu></HamburgerMenu> 
           <SiteLogo></SiteLogo>
           <Search></Search>
           <Cart></Cart>
           <UserLogin></UserLogin>
        </ul>
    )
}

export default Navbar;
