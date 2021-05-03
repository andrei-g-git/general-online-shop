import React from 'react';
import HamburgerMenu from './HamburgerMenu';
import SiteLogo from './SiteLogo';
import Search from './Search';
import CartIcon from './CartIcon';
import UserLoginIcon from './UserLoginIcon';
import '../css/Navbar.scss';

function Navbar(props) {
    let navSliderId = "nav-slider";
    let sliderContainerId = "slider-container";
    if(props.navSliderOpen){
        navSliderId = "nav-slider-active"
        sliderContainerId = "slider-container-translucent"
    }
    
    return (
        
        <div>
            <nav
                id="nav-bar"
            >
                <HamburgerMenu></HamburgerMenu>
                <SiteLogo></SiteLogo>
                <div id="right-hand-icons">
                    <Search></Search>
                    <CartIcon></CartIcon>
                    <UserLoginIcon></UserLoginIcon>
                </div>
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
