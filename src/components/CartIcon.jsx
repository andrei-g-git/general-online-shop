import React from 'react';
import { Link } from 'react-router-dom';
import '../css/LeftNavbarItems.scss';
import cartIcon from "../assets/icons/shopping-cart-icon-29083.png";

function CartIcon() {
    return (
        <Link id="cart-link"
            className="left-navbar-item"
            role="button"
            to="/cart"
        >
            <img id="cart-icon" 
                className="nav-link-icon"
                src={cartIcon}
                alt="n/a"
            />
        </Link>
    )
}

export default CartIcon;
