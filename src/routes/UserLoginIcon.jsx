import React from 'react';
import { Link } from 'react-router-dom';
//import '../css/UserLoginIcon.scss';
import '../css/LeftNavbarItems.scss';

import userIcon from "../assets/icons/user.png";

function UserLoginIcon() {
    return (
        <Link id="user-login-link"
            className="left-navbar-item"
            role="button"
            to="/login"
        >
            <img /* id="user-login" */ 
                /* className="left-navbar-item" */
                className="nav-link-icon"
                src={userIcon}
                alt="n/a"
            />
        </Link>
    )
}

export default UserLoginIcon;
