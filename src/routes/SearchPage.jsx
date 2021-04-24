import React from 'react';
import Footer from '../components/Footer'; //this should be nested once in Main, not in every <route className=""></route>
import ProductSearch from '../components/ProductSearch';
import { withRouter } from 'react-router-dom';

function SearchPage() {
    return (
        <div id="search-page">
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <ProductSearch></ProductSearch>

            <Footer></Footer>
        </div>
    )
}

export default withRouter(SearchPage);
