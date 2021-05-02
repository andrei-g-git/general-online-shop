import React from 'react';
import HamburgerMenu from './HamburgerMenu';
import SiteLogo from './SiteLogo';
import Search from './Search';
import CartIcon from './CartIcon';
import UserLoginIcon from './UserLoginIcon';
import '../css/Navbar.scss';

//test
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar(props) {
    let navSliderId = "nav-slider";
    let sliderContainerId = "slider-container";
    if(props.navSliderOpen){
        navSliderId = "nav-slider-active"
        sliderContainerId = "slider-container-translucent"
    }
    
    return (
        
        <div>
            <nav //className="navbar navbar-default" 
                id="nav-bar"
            >
                    <HamburgerMenu></HamburgerMenu>

                {/* <div className="navbar-brand"> */}
                    <SiteLogo></SiteLogo>

                {/* </div> */} 

                {/* <div className="nav-item"></div> */}
                {/* <nav id="right-hand-icons"> */}
                    {/* <div className="nav-item"> */}
                        <Search></Search>
                    {/* </div> */}
                    {/* <div className="nav-item"> */}
                        <CartIcon></CartIcon>
                    {/* </div> */}
                    {/* <div className="nav-item"> */}
                        <UserLoginIcon></UserLoginIcon>
                    {/* </div> */}
                {/* </nav> */}
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
