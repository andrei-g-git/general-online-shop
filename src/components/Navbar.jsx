import React from 'react';
import HamburgerMenu from '../routes/HamburgerMenu';
import SiteLogo from '../routes/SiteLogo';
import Search from '../routes/Search';
import Cart from '../routes/Cart';
import UserLoginIcon from '../routes/UserLoginIcon';
import '../css/Navbar.scss';

function Navbar(props) {
    let navSliderId = "nav-slider";
    let sliderContainerId = "slider-container";
    if(props.navSliderOpen)
        navSliderId = "nav-slider-active"
        sliderContainerId = "slider-container-translucent"
    return (
        
        <div>
            <nav id="nav-bar">
                <HamburgerMenu></HamburgerMenu> 
                <SiteLogo></SiteLogo>
                <nav id="right-hand-icons">
                    <Search></Search>
                    <Cart></Cart>
                    <UserLoginIcon></UserLoginIcon>
                </nav>
            </nav>

            <div id={sliderContainerId}> 
                <ul id={navSliderId}>
                    <h1>Home</h1>
                    <h1>Other</h1>
                    <h1>Stuff</h1>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
