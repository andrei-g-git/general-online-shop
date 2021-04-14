import React from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from "react-router-dom";
import "../css/SiteLogo.scss";

function SiteLogo(props) {
    return (
/*         <Link id="site-logo"
            role="button"
            to="/"
            onClick={() => test(props)}
        > */
        <a id="site-logo" href="/"> {/* I dunno man, I just dunno */}
            <h1>eShop</h1>
        </a>
        /* </Link> */
    )
}

export default withRouter(SiteLogo);
