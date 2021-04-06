import React from 'react';
//import '../css/Cart.scss';
import '../css/LeftNavbarItems.scss';

import cartIcon from "../assets/icons/shopping-cart-icon-29083.png";

function Cart() {
    return (
        <img id="cart" 
            className="left-navbar-item"
            src={cartIcon}
            alt="n/a"
        />
    )
}

export default Cart
