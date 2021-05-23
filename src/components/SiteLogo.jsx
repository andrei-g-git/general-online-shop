import React from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from "react-router-dom";
import "../css/SiteLogo.scss";

function SiteLogo(props) {
    return (
        <a id="site-logo" href="/"> 
            <h1>eShop</h1>
        </a>
    )
}

export default withRouter(SiteLogo);
