import React from 'react';
//import '../css/UserLogin.scss';
import '../css/LeftNavbarItems.scss';

import userIcon from "../assets/icons/user.png";

function UserLogin() {
    return (
        <img id="user-login" 
            className="left-navbar-item"
            src={userIcon}
            alt="n/a"
        />
    )
}

export default UserLogin;
